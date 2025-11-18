import { Project, VariableDeclarationKind } from "ts-morph";
import { Logger } from "../utils/logger";
import { BaseGenerator } from "./base-generator";

export class CodewareGenerator extends BaseGenerator {
  constructor(project: Project) {
    super(project);
  }

  generate() {
    const sourceFile = this.project.createSourceFile("./out/codeware/index.d.ts", "", {
      overwrite: true,
    });

    this.addHeader(sourceFile);
    sourceFile.addStatements([
      `/// <reference path="./enums.d.ts" />`,
      `/// <reference path="./bitfields.d.ts" />`,
      `/// <reference path="./classes.d.ts" />`,
    ]);

    sourceFile.addInterface({
      name: "MpGame",
      extends: ["MpGamePrecomputed", "MpFuncs", "MpClasses"],
    });

    sourceFile.addInterface({
      name: "Mp",
      properties: [{ name: "game", type: "MpGame" }],
      extends: ["MpGlobalPrecomputed"],
    });

    sourceFile.addVariableStatement({
      hasDeclareKeyword: true,
      declarationKind: VariableDeclarationKind.Const,
      declarations: [{ name: "mp", type: "Mp" }],
    });

    sourceFile.saveSync();
    Logger.success("Index generated successfully");
  }
}
