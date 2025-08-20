import { BaseGenerator } from "./base-generator";
import { readJsonFiles, uniqueBy } from "../utils/file-utils";
import { OptionalKind, EnumDeclarationStructure, Project } from "ts-morph";
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

    const bitfields = this.bitfields.map<
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

    this.addHeader(sourceFile);
    sourceFile.addEnums(bitfields);
    sourceFile.saveSync();

    Logger.success("Bitfields generated successfully");
  }
}
