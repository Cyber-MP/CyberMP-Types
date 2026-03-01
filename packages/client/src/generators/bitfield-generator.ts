import { consola } from 'consola';
import { defsIndex } from 'src/config/constants';
import { RedBitfieldAst } from 'src/red-ast/red-bitfield.ast';
import type {
  EnumDeclarationStructure,
  EnumMemberStructure,
  OptionalKind,
  Project,
} from 'ts-morph';
import bitfields from '../../assets/bitfields.json';
import { uniqueBy } from '../utils/file-utils';
import { BaseGenerator } from './base-generator';

export class BitfieldGenerator extends BaseGenerator {
  private bitfields: RedBitfieldAst[];

  constructor(project: Project) {
    super(project);

    this.bitfields = bitfields.map(RedBitfieldAst.fromJson);
    defsIndex.bitfields = new Set<string>(this.bitfields.map((o) => o.name));
  }

  generate() {
    const sourceFile = this.createSourceFile('./out/bitfields.d.ts');

    this.addHeader(sourceFile);

    sourceFile.addEnums(
      this.bitfields.map<OptionalKind<EnumDeclarationStructure>>((obj) => ({
        name: obj.name,
        isExported: true,
        members: uniqueBy(obj.members, (m) => m.key).map<
          OptionalKind<EnumMemberStructure>
        >((o) => ({
          name: `"${o.key}"`,
          value: o.value,
        })),
      })),
    );
    sourceFile.saveSync();

    consola.success('Bitfields generated successfully');
  }
}
