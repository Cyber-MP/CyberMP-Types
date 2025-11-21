import { CodewareTypeJson, CodewareTypeAst } from "./codeware-type.ast";

export interface CodewareFieldJson {
  name: string;
  type: CodewareTypeJson;
  default: any;
}

export interface CodewareFieldAst {
  name: string;
  type: CodewareTypeJson;
  default: any;
  isOptional: boolean;
  isReadonly: boolean;
  isStatic: boolean;
}

export class CodewareFieldAst {
  static fromJson(
    json: CodewareFieldJson,
    qualifiers: {
      static: boolean;
      const: boolean;
    }
  ): CodewareFieldAst {
    return {
      name: json.name,
      type: json.type,
      default: json.default,
      isOptional: json.default === undefined,
      isReadonly: qualifiers.const,
      isStatic: qualifiers.static,
    };
  }

  static toTypeScript(field: CodewareFieldAst): string {
    const fieldType = CodewareTypeAst.toTypeScript(field.type);
    const staticModifier = field.isStatic ? "static " : "";
    const readonlyModifier = field.isReadonly ? "readonly " : "";
    const optional = field.isOptional ? "?" : "";

    return `  ${staticModifier}${readonlyModifier}${field.name}${optional}: ${fieldType};`;
  }
}
