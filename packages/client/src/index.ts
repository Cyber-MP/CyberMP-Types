import {
  ClassDeclarationStructure,
  EnumDeclarationStructure,
  MethodSignatureStructure,
  OptionalKind,
  Project,
  PropertySignatureStructure,
  SourceFile,
  VariableDeclarationKind,
} from "ts-morph";
import fs from "node:fs";
import { funcs as globalFuncs } from "../assets/globals.json";

// -------------------- Constants --------------------

const project = new Project();
const headerComment = "// THIS CODE IS GENERATED, PLEASE DO NOT EDIT THIS";

const defsIndex = {
  enums: new Set<string>(),
  bitfields: new Set<string>(),
};

const blacklist = ["with", "debugger"];

const DOTNET_CPP_MAP: Record<string, string> = {
  int: "number",
  int32: "number",
  int16: "number",
  int64: "number",
  uint32: "number",
  uint64: "number",
  single: "number",
  double: "number",
  float: "number",
  decimal: "number",
  boolean: "boolean",
  bool: "boolean",
  string: "string",
  char: "string",
  object: "Record<string, any>",
  void: "void",
  any: "any",
  byte: "number",
  sbyte: "number",
  intptr: "number",
  uintptr: "number",
  guid: "string",
  datetime: "Date",
};

// -------------------- Utilities --------------------

function readJsonFiles<T>(dir: string): T[] {
  const files = fs.readdirSync(dir);
  return files.map((file) =>
    JSON.parse(fs.readFileSync(`${dir}/${file}`, "utf8"))
  );
}

function uniqueBy<T>(arr: T[], key: (item: T) => string): T[] {
  const seen = new Set<string>();
  return arr.filter((item) => {
    const k = key(item);
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
}

function resolveType(raw?: string): string {
  if (!raw) return "any";
  const t = raw.trim();
  const low = t.toLowerCase();
  if (DOTNET_CPP_MAP[low]) return DOTNET_CPP_MAP[low];
  if (defsIndex.enums.has(t)) return t;
  return t; // fallback
}

function getFunctionObject(fn: any): OptionalKind<MethodSignatureStructure> {
  const params = fn.params
    ?.filter((o) => o.name !== "gameInstance")
    .map((p) => ({
      name: blacklist.includes(p.name) ? `${p.name}1` : p.name,
      type: "any",
    }));

  return {
    name: `"${fn.shortName}"`,
    returnType: "any",
    parameters: params,
  };
}

// -------------------- Generators --------------------

function createEnums(): void {
  const sourceFile = project.createSourceFile("./out/enums.d.ts", "", {
    overwrite: true,
  });

  const enums = readJsonFiles<any>("./assets/enums").map<
    OptionalKind<EnumDeclarationStructure>
  >((obj) => ({
    ...obj,
    isConst: true,
    hasDeclareKeyword: true,
    members: uniqueBy<any>(obj.members, (m) => m.name).map((m) => ({
      ...m,
      name: `"${m.name}"`,
    })),
  }));

  sourceFile.addStatements(headerComment);
  sourceFile.addEnums(enums);
  sourceFile.saveSync();

  defsIndex.enums = new Set(enums.map((e) => e.name!));
  console.log("Enums created");
}

function createBitfields(): void {
  const sourceFile = project.createSourceFile("./out/bitfields.d.ts", "", {
    overwrite: true,
  });

  const bitfields = readJsonFiles<any>("./assets/bitfields").map<
    OptionalKind<EnumDeclarationStructure>
  >((obj) => ({
    ...obj,
    isConst: true,
    hasDeclareKeyword: true,
    members: uniqueBy<any>(obj.members, (m) => m.name).map(
      ({ bit, ...rest }) => ({
        ...rest,
        name: `"${rest.name}"`,
        value: 1 << bit,
      })
    ),
  }));

  sourceFile.addStatements(headerComment);
  sourceFile.addEnums(bitfields);
  sourceFile.saveSync();

  console.log("Bitfields created");
}

function createFuncs(file: SourceFile): void {
  const funcs = uniqueBy(
    globalFuncs.filter((o) => !o.shortName.includes(";")),
    (m) => m.shortName
  );

  file.addInterface({
    name: "MpFuncs",
    methods: funcs.map(getFunctionObject),
  });
}

function sortClasses(
  classes: OptionalKind<ClassDeclarationStructure>[]
): OptionalKind<ClassDeclarationStructure>[] {
  const byName = new Map(classes.map((c) => [c.name!, c]));
  const visited = new Set<string>();
  const result: OptionalKind<ClassDeclarationStructure>[] = [];

  function visit(cls: OptionalKind<ClassDeclarationStructure>) {
    if (!cls.name || visited.has(cls.name)) return;
    if (cls.extends && byName.has(cls.extends as string)) {
      visit(byName.get(cls.extends as string)!);
    }
    visited.add(cls.name);
    result.push(cls);
  }

  for (const cls of classes) visit(cls);
  return result;
}

function createClasses(file: SourceFile): void {
  const sourceFile = project.createSourceFile("./out/classes.d.ts", "", {
    overwrite: true,
  });

  const classObjs = readJsonFiles<any>("./assets/classes");

  const classes = classObjs.map<OptionalKind<ClassDeclarationStructure>>(
    (obj) => ({
      name: obj.name,
      extends: obj.parent,
      hasDeclareKeyword: true,
      properties: obj.props?.map((p) => ({
        name: `"${p.name}"`,
        type: "any",
      })),
      methods: obj.funcs?.map(getFunctionObject),
    })
  );

  sourceFile.addStatements([
    headerComment,
    `/// <reference path="./enums.d.ts" />`,
    `/// <reference path="./bitfields.d.ts" />`,
  ]);
  sourceFile.addClasses(sortClasses(classes));
  sourceFile.saveSync();

  console.log("Classes created");

  file.addInterface({
    name: "MpClasses",
    properties: classObjs.map<OptionalKind<PropertySignatureStructure>>(
      (obj) => ({
        name: obj.name,
        type: obj.name,
      })
    ),
  });
}

function createIndex(): void {
  const sourceFile = project.createSourceFile("./out/index.ts", "", {
    overwrite: true,
  });

  sourceFile.addStatements([
    headerComment,
    `/// <reference path="./enums.d.ts" />`,
    `/// <reference path="./bitfields.d.ts" />`,
    `/// <reference path="./classes.d.ts" />`,
  ]);

  createClasses(sourceFile);
  createFuncs(sourceFile);

  sourceFile.addInterface({
    name: "MpGame",
    extends: ["MpFuncs", "MpClasses"],
  });

  sourceFile.addInterface({
    name: "Mp",
    properties: [{ name: "game", type: "MpGame" }],
  });

  sourceFile.addVariableStatement({
    hasDeclareKeyword: true,
    declarationKind: VariableDeclarationKind.Const,
    declarations: [{ name: "mp", type: "Mp" }],
  });

  sourceFile.saveSync();
  console.log("Index created");
}

// -------------------- Entrypoint --------------------

function main() {
  createEnums();
  createBitfields();
  createIndex();
}

main();
