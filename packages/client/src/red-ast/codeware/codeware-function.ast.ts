import { CodewareTypeJson, CodewareTypeAst } from "./codeware-type.ast";

export interface CodewareFunctionParamJson {
  name: string;
  type: CodewareTypeJson;
  qualifiers: {
    optional: boolean;
    const: boolean;
  };
}

export interface CodewareFunctionJson {
  name: string;
  params: CodewareFunctionParamJson[];
  return_type?: CodewareTypeJson;
}

export interface CodewareFunctionAst {
  name: string;
  params: CodewareFunctionParamJson[];
  returnType?: CodewareTypeJson;
  isStatic: boolean;
}

export class CodewareFunctionAst {
  static fromJson(
    json: CodewareFunctionJson,
    isStatic: boolean
  ): CodewareFunctionAst {
    return {
      name: json.name,
      params: json.params || [],
      returnType: json.return_type,
      isStatic,
    };
  }

  static toTypeScript(func: CodewareFunctionAst, isStatic: boolean): string {
    const params = func.params
      .map((param) => {
        const paramType = CodewareTypeAst.toTypeScript(param.type);
        const optional = param.qualifiers.optional ? "?" : "";
        const readonly = param.qualifiers.const ? "readonly " : "";
        return `${readonly}${param.name}${optional}: ${paramType}`;
      })
      .join(", ");

    const returnType = func.returnType
      ? CodewareTypeAst.toTypeScript(func.returnType)
      : "void";
    const staticModifier = isStatic ? "static " : "";

    return `  ${staticModifier}${func.name}(${params}): ${returnType};`;
  }
}

