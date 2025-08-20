import { BaseGenerator } from "./base-generator";
import { readJsonFiles, uniqueBy } from "../utils/file-utils";
import { Project, ModuleDeclarationKind } from "ts-morph";
import { Logger } from "../utils/logger";
import { defsIndex } from "src/config/constants";

export class EnumGenerator extends BaseGenerator {
  private enums: any[];

  constructor(project: Project) {
    super(project);

    this.enums = readJsonFiles<any>("./assets/enums");
    defsIndex.enums = new Set<string>(this.enums.map((o) => o.name));
  }

  generate() {
    const sourceFile = this.createSourceFile("./out/enums.d.ts");

    const enumDecls: string[] = this.enums.map((obj) => {
      const members = uniqueBy(obj.members, (m: any) => m.name)
        .map((m) => `  "${m.name}" = ${m.value},`)
        .join("\n");

      return `declare const enum ${obj.name} {\n${members}\n}`;
    });

    this.addHeader(sourceFile);
    sourceFile.addModule({
      name: "CyberEnums",
      hasDeclareKeyword: true,
      declarationKind: ModuleDeclarationKind.Namespace,
      statements: enumDecls,
    });
    sourceFile.saveSync();

    Logger.success("Enums generated successfully");
  }
}
