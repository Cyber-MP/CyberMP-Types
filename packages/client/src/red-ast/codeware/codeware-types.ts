export type CodewareItemData<T, K extends string> = {
  [P in K]: T;
} & { kind: K };

export interface CodewareAnnotation {
  args:
    | {
        kind: string;
        name: string;
      }
    | string;
  name: string;
}

export interface CodewareItem<T, K extends string> {
  annotations: CodewareAnnotation[];
  doc: unknown[];
  item: CodewareItemData<T, K>;
  qualifiers: {
    abstract: boolean;
    callback: boolean;
    const: boolean;
    exec: boolean;
    final: boolean;
    import_only: boolean;
    native: boolean;
    persistent: boolean;
    quest: boolean;
    static: boolean;
  };
  visibility: "private" | "public" | "protected" | null;
}
