import { BaseGenerator } from "./base-generator";
import { uniqueBy } from "../utils/file-utils";
import { getFunctionParams, resolveType } from "../utils/type-resolver";
import { Project, SourceFile } from "ts-morph";
import { funcs as globalFuncs } from "../../assets/globals.json";
import { funcs as customFuncs } from "../../assets/custom-globals.json";
import { Logger } from "../utils/logger";
import { defsIndex } from "src/config/constants";

export class FuncGenerator extends BaseGenerator<[SourceFile]> {
  private funcs: typeof globalFuncs;

  constructor(project: Project) {
    super(project);

    const funcs = [...(customFuncs as any[]), ...globalFuncs];

    this.funcs = uniqueBy(
      funcs.filter((o) => !o.shortName.includes(";")),
      (m) => m.shortName
    );
    defsIndex.funcs = new Set<string>(this.funcs.map((o) => o.shortName));
  }

  generate(file: SourceFile) {
    file.addInterface({
      name: "MpFuncs",
      methods: this.funcs.map((fn) => ({
        name: `"${fn.shortName}"`,
        returnType: resolveType(fn.return),
        parameters: getFunctionParams(fn.params),
        docs: (fn as any).docs,
      })),
    });

    Logger.success("Funcs generated successfully");
  }
}
