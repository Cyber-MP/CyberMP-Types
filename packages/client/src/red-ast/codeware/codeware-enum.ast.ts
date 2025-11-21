export interface CodewareEnumVariantJson {
  name: string;
  value: number;
}

export interface CodewareEnumJson {
  name: string;
  variants: CodewareEnumVariantJson[];
}

export interface CodewareEnumAst {
  name: string;
  variants: CodewareEnumVariantJson[];
}

export class CodewareEnumAst {
  static fromJson(json: CodewareEnumJson): CodewareEnumAst {
    return {
      name: json.name,
      variants: json.variants || [],
    };
  }
}
