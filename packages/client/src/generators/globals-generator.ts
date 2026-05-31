import { consola } from 'consola';
import { unique } from 'radash';
import type {
  MethodSignatureStructure,
  OptionalKind,
  Project,
  SourceFile,
} from 'ts-morph';
import { defsIndex } from '../config/constants';
import { dumps } from '../dumps';
import { RedFunctionAst } from '../red-ast/red-function.ast';
import { BaseGenerator } from './base-generator';

export class GlobalsGenerator extends BaseGenerator<[SourceFile]> {
  private funcs: RedFunctionAst[];

  constructor(project: Project) {
    super(project);

    const functions: RedFunctionAst[] = dumps.globals.map((json) =>
      RedFunctionAst.fromJson(json),
    );

    functions.sort(RedFunctionAst.sort);

    this.funcs = unique(
      functions.filter(
        (item) =>
          !item.name.startsWith('Operator') && !item.name.startsWith('Cast'),
      ),
      (m) => m.name,
    );

    defsIndex.funcs = new Set<string>([...this.funcs.map((o) => o.name)]);
  }

  generate(parentFile: SourceFile) {
    parentFile.addInterface({
      name: 'MpGlobals',
      isExported: true,
      methods: this.funcs.map<OptionalKind<MethodSignatureStructure>>((fn) => ({
        name: `"${fn.name}"`,
        returnType: RedFunctionAst.getFunctionReturnType(fn),
        parameters: RedFunctionAst.getFunctionParams(fn.arguments),
      })),
    });

    consola.success('Funcs generated successfully');
  }
}
