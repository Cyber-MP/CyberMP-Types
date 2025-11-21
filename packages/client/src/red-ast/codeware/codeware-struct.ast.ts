import { CodewareTypeJson } from "./codeware-type.ast";
import { CodewareFieldJson } from "./codeware-field.ast";

export interface CodewareStructItemJson {
  item: {
    kind: "let";
    field: CodewareFieldJson;
  };
  qualifiers: {
    const: boolean;
  };
}

export interface CodewareStructJson {
  name: string;
  extends?: CodewareTypeJson;
  items?: CodewareStructItemJson[];
}

export interface CodewareStructAst {
  name: string;
  extends?: CodewareTypeJson;
  items: CodewareStructItemJson[];
}

export class CodewareStructAst {
  static fromJson(
    json: CodewareStructJson,
    items: CodewareStructItemJson[]
  ): CodewareStructAst {
    return {
      name: json.name,
      extends: json.extends,
      items: json.items || items,
    };
  }
}
