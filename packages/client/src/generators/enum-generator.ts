import { BaseGenerator } from "./base-generator";
import { uniqueBy } from "../utils/file-utils";
import { Project, ModuleDeclarationKind } from "ts-morph";
import { Logger } from "../utils/logger";
import { defsIndex } from "src/config/constants";
import enums from "../../assets/enums.json";
import { RedEnumAst } from "src/red-ast/red-enum.ast";

export class EnumGenerator extends BaseGenerator {
  private enums: RedEnumAst[];

  constructor(project: Project) {
    super(project);

    this.enums = enums.map(RedEnumAst.fromJson);
    defsIndex.enums = new Set<string>(this.enums.map((o) => o.name));
  }

  generate() {
    const sourceFile = this.createSourceFile("./out/enums.d.ts");

    const enumDecls: string[] = this.enums.map((obj) => {
      const members = uniqueBy(obj.members, (m) => m.key)
        .map((m) => `  "${m.key}" = ${m.value},`)
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
