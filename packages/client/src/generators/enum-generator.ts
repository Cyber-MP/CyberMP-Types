import { BaseGenerator } from "./base-generator";
import { readJsonFiles, uniqueBy } from "../utils/file-utils";
import { OptionalKind, EnumDeclarationStructure, Project } from "ts-morph";
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

    const enums = this.enums.map<OptionalKind<EnumDeclarationStructure>>(
      (obj) => ({
        ...obj,
        isConst: true,
        hasDeclareKeyword: true,
        members: uniqueBy<any>(obj.members, (m) => m.name).map((m) => ({
          ...m,
          name: `"${m.name}"`,
        })),
      })
    );

    this.addHeader(sourceFile);
    sourceFile.addEnums(enums);
    sourceFile.saveSync();

    Logger.success("Enums generated successfully");
  }
}
