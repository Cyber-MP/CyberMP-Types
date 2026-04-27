import { consola } from 'consola';
import type {
  MethodSignatureStructure,
  OptionalKind,
  Project,
  SourceFile,
} from 'ts-morph';
import { defsIndex } from '../config/constants';
import { dumps } from '../dumps';
import { RedFunctionAst } from '../red-ast/red-function.ast';
import { uniqueBy } from '../utils/file-utils';
import {
  getFunctionParams,
  getFunctionReturnType,
} from '../utils/type-resolver';
import { BaseGenerator } from './base-generator';

export class FuncGenerator extends BaseGenerator<[SourceFile]> {
  private funcs: RedFunctionAst[];

  constructor(project: Project) {
    super(project);

    const functions: RedFunctionAst[] = dumps.globals.map((json) =>
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

  generate(parentFile: SourceFile) {
    parentFile.addInterface({
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
