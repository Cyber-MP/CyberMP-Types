import { BaseGenerator } from "./base-generator";
import { readJsonFiles, uniqueBy } from "../utils/file-utils";
import { Project, ModuleDeclarationKind } from "ts-morph";
import { Logger } from "../utils/logger";
import { defsIndex } from "src/config/constants";

export class BitfieldGenerator extends BaseGenerator {
  private bitfields: any[];

  constructor(project: Project) {
    super(project);

    this.bitfields = readJsonFiles<any>("./assets/bitfields");
    defsIndex.bitfields = new Set<string>(this.bitfields.map((o) => o.name));
  }

  generate() {
    const sourceFile = this.createSourceFile("./out/bitfields.d.ts");

    const bitfieldDecls: string[] = this.bitfields.map((obj) => {
      const enumMembers = uniqueBy(obj.members, (m: any) => m.name)
        .map(({ bit, name }) => `  "${name}" = ${1 << bit},`)
        .join("\n");

      return `declare const enum ${obj.name} {\n${enumMembers}\n}`;
    });

    this.addHeader(sourceFile);

    sourceFile.addModule({
      name: "CyberEnums.BitFields",
      hasDeclareKeyword: true,
      declarationKind: ModuleDeclarationKind.Namespace,
      statements: bitfieldDecls,
    });

    sourceFile.saveSync();

    Logger.success("Bitfields generated successfully");
  }
}
