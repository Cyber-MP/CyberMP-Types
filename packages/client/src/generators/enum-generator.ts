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
import { RedEnumAst } from '../red-ast/red-enum.ast';
import { BaseGenerator } from './base-generator';

export class EnumGenerator extends BaseGenerator {
  private enums: RedEnumAst[];

  constructor(project: Project) {
    super(project);

    this.enums = dumps.enums.map(RedEnumAst.fromJson);
    defsIndex.enums = new Set<string>(this.enums.map((o) => o.name));
  }

  generate() {
    const sourceFile = this.createSourceFile('./out/enums.ts');

    this.addHeader(sourceFile);

    sourceFile.addExportDeclaration({
      moduleSpecifier: '../precomputed/enums',
    });

    sourceFile.addEnums(
      this.enums.map<OptionalKind<EnumDeclarationStructure>>((obj) => ({
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

    consola.success('Enums generated successfully');
  }
}
