import { consola } from 'consola';
import { BaseGenerator } from './base-generator';

export class MpGenerator extends BaseGenerator {
  generate() {
    const sourceFile = this.project.createSourceFile('./out/mp.d.ts', '', {
      overwrite: true,
    });

    this.addHeader(sourceFile);

    sourceFile.addImportDeclaration({
      moduleSpecifier: './game.d.ts',
      namedImports: ['MpGame'],
    });

    sourceFile.addInterface({
      name: 'MpClient',
      properties: [{ name: 'game', type: 'MpGame' }],
      isExported: true,
    });

    sourceFile.addExportDeclaration({
      moduleSpecifier: './precomputed/mp.d.ts',
    });

    sourceFile.saveSync();
    consola.success('Mp generated successfully');
  }
}
