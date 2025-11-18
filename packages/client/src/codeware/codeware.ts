export namespace Codeware {
  /* KindOf */
  export interface KindOf {
    kind: string;
    name: string;
  }

  export type Kind = KindOf | string;

  /* Annotation */
  export interface AnnotationKindOf extends KindOf {
    kind: "ident";
  }

  export interface Annotation {
    args: AnnotationKindOf[];
    name:
      | "wrapMethod"
      | "replaceMethod"
      | "addMethod"
      | "addField"
      | "neverRef"
      | "mixedRef";
    //   | "intrinsic"
    //   | "nameImplementation"
    //   | "runtimeProperty"
    //   | "deriveNew"
    //   | "privateConstructor";
  }

  /* Item */
  export interface Item {
    annotations: Annotation[];
    doc?: string[]; // Uselsess thing
    item: string[];
  }

  export interface InnerItem {
    kind: Kind
  }
}
