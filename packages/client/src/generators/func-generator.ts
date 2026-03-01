import { consola } from 'consola';
import { defsIndex } from 'src/config/constants';
import { RedFunctionAst } from 'src/red-ast/red-function.ast';
import {
  getFunctionParams,
  getFunctionReturnType,
} from 'src/utils/type-resolver';
import type {
  MethodSignatureStructure,
  ModuleDeclaration,
  OptionalKind,
  Project,
} from 'ts-morph';
import globalFuncs from '../../assets/globals.json';
import { uniqueBy } from '../utils/file-utils';
import { BaseGenerator } from './base-generator';

export class FuncGenerator extends BaseGenerator<[ModuleDeclaration]> {
  private funcs: RedFunctionAst[];

  constructor(project: Project) {
    super(project);

    const functions: RedFunctionAst[] = globalFuncs.map((json) =>
      RedFunctionAst.fromJson(json),
    );

    functions.sort(RedFunctionAst.sort);

    this.funcs = uniqueBy(
      functions.filter((item) => {
        return (
          !item.name.startsWith('Operator') && !item.name.startsWith('Cast')
        );
      }),
      (m) => m.name,
    );

    defsIndex.funcs = new Set<string>([...this.funcs.map((o) => o.name)]);
  }

  generate(module: ModuleDeclaration) {
    module.addInterface({
      name: 'MpFuncs',
      methods: this.funcs.map<OptionalKind<MethodSignatureStructure>>((fn) => ({
        name: `"${fn.name}"`,
        returnType: getFunctionReturnType(fn),
        parameters: getFunctionParams(fn.arguments),
      })),
    });

    consola.success('Funcs generated successfully');
  }
}
