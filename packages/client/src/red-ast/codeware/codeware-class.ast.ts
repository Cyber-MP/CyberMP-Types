import { CodewareTypeJson } from "./codeware-type.ast";
import { CodewareFieldAst, CodewareFieldJson } from "./codeware-field.ast";
import {
  CodewareFunctionAst,
  CodewareFunctionJson,
} from "./codeware-function.ast";

export interface CodewareClassItemJson {
  item: {
    kind: "let" | "function";
    field?: CodewareFieldJson;
    function?: CodewareFunctionJson;
  };
  qualifiers: {
    static: boolean;
    const: boolean;
    abstract: boolean;
  };
}

export interface CodewareClassJson {
  name: string;
  extends?: CodewareTypeJson;
  items?: CodewareClassItemJson[];
}

export interface CodewareClassAst {
  name: string;
  extends?: CodewareTypeJson;
  items: CodewareClassItemJson[];
  isAbstract: boolean;
}

export class CodewareClassAst {
  static fromJson(
    json: CodewareClassJson,
    items: CodewareClassItemJson[]
  ): CodewareClassAst {
    const isAbstract = items[0]?.qualifiers.abstract || false;

    return {
      name: json.name,
      extends: json.extends,
      items: json.items || items,
      isAbstract,
    };
  }
}
