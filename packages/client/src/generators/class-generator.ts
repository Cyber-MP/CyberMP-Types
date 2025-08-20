import { BaseGenerator } from "./base-generator";
import { readJsonFiles } from "../utils/file-utils";
import {
  OptionalKind,
  ClassDeclarationStructure,
  PropertySignatureStructure,
  SourceFile,
  Project,
  Scope,
  InterfaceDeclarationStructure,
  MethodSignatureStructure,
} from "ts-morph";
import { getFunctionParams, resolveType } from "../utils/type-resolver";
import { Logger } from "../utils/logger";
import { defsIndex } from "src/config/constants";

enum RedFunctionFlags {
  isPrivate,
  isProtected,
  isNative,
  isStatic,
  isFinal,
  isThreadSafe,
  isEvent,
  isConst,
  isQuest,
  isTimer,
}

function getScopeFromFunctionFlags(flags: number): Scope {
  if (((flags >> RedFunctionFlags.isPrivate) & 1) !== 0) {
    return Scope.Private;
  } else if (((flags >> RedFunctionFlags.isProtected) & 1) !== 0) {
    return Scope.Protected;
  } else {
    return Scope.Public;
  }
}

export class ClassGenerator extends BaseGenerator<[SourceFile]> {
  private classObjs: any[];

  constructor(project: Project) {
    super(project);

    this.classObjs = readJsonFiles<any>("./assets/classes");
    defsIndex.classes = new Set<string>(this.classObjs.map((o) => o.name));
  }

  private sortClasses(
    classes: OptionalKind<ClassDeclarationStructure>[]
  ): OptionalKind<ClassDeclarationStructure>[] {
    const byName = new Map(classes.map((c) => [c.name!, c]));
    const visited = new Set<string>();
    const result: OptionalKind<ClassDeclarationStructure>[] = [];

    const visit = (cls: OptionalKind<ClassDeclarationStructure>) => {
      if (!cls.name || visited.has(cls.name)) return;
      if (cls.extends && byName.has(cls.extends as string)) {
        visit(byName.get(cls.extends as string)!);
      }
      visited.add(cls.name);
      result.push(cls);
    };

    for (const cls of classes) visit(cls);
    return result;
  }

  generate(file: SourceFile) {
    const sourceFile = this.createSourceFile("./out/classes.d.ts");

    const classMap = new Map<string, any>(
      this.classObjs.map((o) => [o.name, o])
    );

    const interfaces = this.classObjs.map<
      OptionalKind<InterfaceDeclarationStructure>
    >((obj) => {
      const funcs: any[] = obj.funcs ?? [];
      const propsList: any[] = obj.props ?? [];

      // method names set
      const methodNames = new Set<string>(
        funcs.map((f) => String(f.shortName))
      );

      // filter out properties that collide with method names (delete duplicates)
      const filteredProps = propsList.filter((p) => {
        const propName = String(p.name);
        if (methodNames.has(propName)) {
          // removed because method with same name exists
          return false;
        }
        return true;
      });

      const properties: OptionalKind<PropertySignatureStructure>[] =
        filteredProps.map((p: any) => ({
          name: `"${p.name}"`,
          type: resolveType(p.type),
        }));

      const methods: OptionalKind<MethodSignatureStructure>[] = funcs.map(
        (fn: any) => ({
          name: `"${fn.shortName}"`,
          returnType: resolveType(fn.return?.type),
          parameters: getFunctionParams(fn.params),
        })
      );

      const extendsArr = obj.parent ? [obj.parent] : undefined;

      return {
        name: obj.name,
        extends: extendsArr,
        hasDeclareKeyword: true,
        properties,
        methods,
      };
    });

    this.addHeader(sourceFile);
    sourceFile.addStatements([
      `/// <reference path="./globals.d.ts" />`,
      `/// <reference path="./enums.d.ts" />`,
      `/// <reference path="./bitfields.d.ts" />`,
    ]);
    sourceFile.addInterfaces(interfaces);
    sourceFile.saveSync();

    file.addInterface({
      name: "MpClasses",
      properties: this.classObjs.map<OptionalKind<PropertySignatureStructure>>(
        (obj) => ({
          name: obj.name,
          type:
            obj.parent === "gameIGameSystem"
              ? obj.name
              : `{ new(): ${obj.name} }`,
        })
      ),
    });

    Logger.success("Classes generated successfully");
  }
}
