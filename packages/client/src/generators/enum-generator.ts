import { consola } from 'consola';
import { defsIndex } from 'src/config/constants';
import { RedEnumAst } from 'src/red-ast/red-enum.ast';
import { uniqueBy } from 'src/utils/file-utils';
import type {
  EnumDeclarationStructure,
  EnumMemberStructure,
  OptionalKind,
  Project,
} from 'ts-morph';
import enums from '../../assets/enums.json';
import { BaseGenerator } from './base-generator';

export class EnumGenerator extends BaseGenerator {
  private enums: RedEnumAst[];

  constructor(project: Project) {
    super(project);

    this.enums = enums.map(RedEnumAst.fromJson);
    defsIndex.enums = new Set<string>(this.enums.map((o) => o.name));
  }

  generate() {
    const sourceFile = this.createSourceFile('./out/enums.d.ts');

    this.addHeader(sourceFile);

    sourceFile.addExportDeclaration({
      moduleSpecifier: './precomputed/enums.d.ts',
    });

    sourceFile.addEnums(
      this.enums.map<OptionalKind<EnumDeclarationStructure>>((obj) => ({
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

    consola.success('Enums generated successfully');
  }
}
