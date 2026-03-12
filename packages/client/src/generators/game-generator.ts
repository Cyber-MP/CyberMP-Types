import { consola } from 'consola';
import type { Project } from 'ts-morph';
import { BaseGenerator } from './base-generator';
import { ClassGenerator } from './class-generator';
import { FuncGenerator } from './func-generator';

export class GameGenerator extends BaseGenerator {
  private funcGenerator: FuncGenerator;
  private classGenerator: ClassGenerator;

  constructor(project: Project) {
    super(project);

    this.funcGenerator = new FuncGenerator(project);
    this.classGenerator = new ClassGenerator(project);
  }

  generate() {
    const sourceFile = this.project.createSourceFile('./out/game.d.ts', '', {
      overwrite: true,
    });

    sourceFile.addImportDeclarations([
      {
        moduleSpecifier: './enums.d.ts',
        namespaceImport: 'CyberEnums',
      },
      {
        moduleSpecifier: './bitfields.d.ts',
        namespaceImport: 'CyberBitfields',
      },
    ]);

    this.addHeader(sourceFile);

    this.funcGenerator.generate(sourceFile);
    this.classGenerator.generate(sourceFile);

    sourceFile.addInterface({
      name: 'MpGame',
      extends: ['MpFuncs', 'MpClasses'],
      isExported: true,
    });

    sourceFile.addExportDeclaration({
      moduleSpecifier: './precomputed/game.d.ts',
    });

    sourceFile.saveSync();
    consola.success('Game generated successfully');
  }
}
