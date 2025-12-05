import { consola } from "consola";
import { defsIndex } from "src/config/constants";
import { RedEnumAst } from "src/red-ast/red-enum.ast";
import { ModuleDeclarationKind, Project } from "ts-morph";
import enums from "../../assets/enums.json";
import { uniqueBy } from "../utils/file-utils";
import { BaseGenerator } from "./base-generator";

export class EnumGenerator extends BaseGenerator {
  private enums: RedEnumAst[];

  constructor(project: Project) {
    super(project);

    this.enums = enums.map(RedEnumAst.fromJson);
    defsIndex.enums = new Set<string>(this.enums.map((o) => o.name));
  }

  generate() {
    const sourceFile = this.createSourceFile("./out/enums.d.ts");
    sourceFile.addStatements([
      `/// <reference path="./precomputed/enums.d.ts" />`,
    ]);

    const enumDecls: string[] = this.enums.map((obj) => {
      const members = uniqueBy(obj.members, (m) => m.key)
        .map((m) => `  "${m.key}" = ${m.value},`)
        .join("\n");

      return `const enum ${obj.name} {\n${members}\n}`;
    });

    this.addHeader(sourceFile);
    sourceFile.addModule({
      name: "CyberEnums",
      hasDeclareKeyword: true,
      declarationKind: ModuleDeclarationKind.Namespace,
      statements: enumDecls,
    });
    sourceFile.saveSync();

    consola.success("Enums generated successfully");
  }
}
