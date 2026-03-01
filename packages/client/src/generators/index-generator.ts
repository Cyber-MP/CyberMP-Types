import { consola } from 'consola';
import {
  ModuleDeclarationKind,
  type Project,
  VariableDeclarationKind,
} from 'ts-morph';
import { BaseGenerator } from './base-generator';
import { ClassGenerator } from './class-generator';
import { FuncGenerator } from './func-generator';

export class IndexGenerator extends BaseGenerator {
  private funcGenerator: FuncGenerator;
  private classGenerator: ClassGenerator;

  constructor(project: Project) {
    super(project);

    this.funcGenerator = new FuncGenerator(project);
    this.classGenerator = new ClassGenerator(project);
  }

  generate() {
    const sourceFile = this.project.createSourceFile('./out/index.d.ts', '', {
      overwrite: true,
    });

    sourceFile.addStatements(`import * as CyberEnums from './enums'`);
    sourceFile.addStatements(`import * as CyberBitfields from './bitfields'`);

    sourceFile.addExportDeclaration({});

    sourceFile.insertStatements(0, [
      `/// <reference path="./enums.d.ts" />`,
      `/// <reference path="./bitfields.d.ts" />`,
      `/// <reference path="./classes.d.ts" />`,
      `/// <reference path="./precomputed/index.d.ts" />`,
    ]);

    this.addHeader(sourceFile);

    const module = sourceFile.addModule({
      hasDeclareKeyword: true,
      declarationKind: ModuleDeclarationKind.Global,
      name: 'global',
    });

    this.funcGenerator.generate(module);
    this.classGenerator.generate(module);

    module.addInterface({
      name: 'MpGame',
      extends: ['MpGamePrecomputed', 'MpFuncs', 'MpClasses'],
    });

    module.addInterface({
      name: 'Mp',
      properties: [{ name: 'game', type: 'MpGame' }],
      extends: ['MpGlobalPrecomputed'],
    });

    module.addVariableStatement({
      declarationKind: VariableDeclarationKind.Const,
      declarations: [{ name: 'mp', type: 'Mp' }],
    });

    sourceFile.saveSync();
    consola.success('Index generated successfully');
  }
}
