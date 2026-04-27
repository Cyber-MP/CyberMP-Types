import { consola } from 'consola';
import { unique } from 'radash';
import type {
  EnumDeclarationStructure,
  EnumMemberStructure,
  OptionalKind,
  Project,
} from 'ts-morph';
import { defsIndex } from '../config/constants';
import { dumps } from '../dumps';
import { RedBitfieldAst } from '../red-ast/red-bitfield.ast';
import { BaseGenerator } from './base-generator';

export class BitfieldGenerator extends BaseGenerator {
  private bitfields: RedBitfieldAst[];

  constructor(project: Project) {
    super(project);

    this.bitfields = dumps.bitfields.map(RedBitfieldAst.fromJson);
    defsIndex.bitfields = new Set<string>(this.bitfields.map((o) => o.name));
  }

  generate() {
    const sourceFile = this.createSourceFile('./out/bitfields.ts');

    this.addHeader(sourceFile);

    sourceFile.addEnums(
      this.bitfields.map<OptionalKind<EnumDeclarationStructure>>((obj) => ({
        name: obj.name,
        isExported: true,
        members: unique(obj.members, (m) => m.key).map<
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
