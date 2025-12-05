import { consola } from "consola";
import { defsIndex } from "src/config/constants";
import { RedFunctionAst } from "src/red-ast/red-function.ast";
import { RedTypeAst } from "src/red-ast/red-type.ast";
import { getFunctionParams } from "src/utils/type-resolver";
import {
  MethodSignatureStructure,
  OptionalKind,
  Project,
  SourceFile,
} from "ts-morph";
import globalFuncs from "../../assets/globals.json";
import { uniqueBy } from "../utils/file-utils";
import { BaseGenerator } from "./base-generator";

export class FuncGenerator extends BaseGenerator<[SourceFile]> {
  private funcs: RedFunctionAst[];

  constructor(project: Project) {
    super(project);

    const functions: RedFunctionAst[] = globalFuncs.map((json) =>
      RedFunctionAst.fromJson(json),
    );

    functions.sort(RedFunctionAst.sort);

    this.funcs = uniqueBy(
      functions.filter((item) => {
        return (
          !item.name.startsWith("Operator") && !item.name.startsWith("Cast")
        );
      }),
      (m) => m.name,
    );
    defsIndex.funcs = new Set<string>([...this.funcs.map((o) => o.name)]);
  }

  generate(file: SourceFile) {
    file.addInterface({
      name: "MpFuncs",
      methods: this.funcs.map<OptionalKind<MethodSignatureStructure>>((fn) => ({
        name: `"${fn.name}"`,
        returnType: fn.returnType
          ? RedTypeAst.toTypescript(fn?.returnType)
          : "any",
        parameters: getFunctionParams(fn.arguments),
        // returnType: resolveType(fn.return),
        // parameters: getFunctionParams(fn.params),
        // docs: (fn as any).docs,
      })),
    });
    consola.success("Funcs generated successfully");
  }
}
