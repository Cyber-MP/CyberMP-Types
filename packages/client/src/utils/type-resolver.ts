import type { RedFunctionAst } from 'src/red-ast/red-function.ast';
import { RedTypeAst } from 'src/red-ast/red-type.ast';
import type { OptionalKind, ParameterDeclarationStructure } from 'ts-morph';
import { blacklist } from '../config/constants';

export function getFunctionParams(
  params: RedFunctionAst['arguments'],
): OptionalKind<ParameterDeclarationStructure>[] {
  if (!params || !params.length) {
    return [];
  }

  return params
    ?.filter(
      (o) => !o.isOut && RedTypeAst.toLuadoc(o.type) !== 'ScriptGameInstance',
    )
    .map((p) => ({
      name: blacklist.includes(p.name) ? `${p.name}1` : p.name,
      type: RedTypeAst.toTypescript(p.type),
      hasQuestionToken: p.isOptional,
    }));
}

export function getFunctionReturnType(fn: RedFunctionAst) {
  if (!fn.returnType) {
    return 'void';
  }

  const candidateOut = fn.arguments.find((o) => o.isOut);
  if (candidateOut) {
    return `[${RedTypeAst.toTypescript(
      fn.returnType,
    )}, ${RedTypeAst.toTypescript(candidateOut.type)}]`;
  }

  return RedTypeAst.toTypescript(fn.returnType);
}
