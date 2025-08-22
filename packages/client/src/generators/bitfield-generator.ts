import { BaseGenerator } from "./base-generator";
import { uniqueBy } from "../utils/file-utils";
import { Project, ModuleDeclarationKind } from "ts-morph";
import { Logger } from "../utils/logger";
import { defsIndex } from "src/config/constants";
import bitfields from "../../assets/bitfields.json";
import { RedBitfieldAst } from "src/red-ast/red-bitfield.ast";

export class BitfieldGenerator extends BaseGenerator {
  private bitfields: RedBitfieldAst[];

  constructor(project: Project) {
    super(project);

    this.bitfields = bitfields.map(RedBitfieldAst.fromJson);
    defsIndex.bitfields = new Set<string>(this.bitfields.map((o) => o.name));
  }

  generate() {
    const sourceFile = this.createSourceFile("./out/bitfields.d.ts");

    const bitfieldDecls: string[] = this.bitfields.map((obj) => {
      const enumMembers = uniqueBy(obj.members, (m) => m.key)
        .map(({ key, value }) => `  "${key}" = ${1 << value},`)
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
