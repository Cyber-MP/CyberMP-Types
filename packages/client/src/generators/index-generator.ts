import { Project, VariableDeclarationKind } from "ts-morph";
import { Logger } from "../utils/logger";
import { BaseGenerator } from "./base-generator";
import { ClassGenerator } from "./class-generator";
import { FuncGenerator } from "./func-generator";

export class IndexGenerator extends BaseGenerator {
  private funcGenerator: FuncGenerator;
  private classGenerator: ClassGenerator;

  constructor(project: Project) {
    super(project);

    this.funcGenerator = new FuncGenerator(project);
    this.classGenerator = new ClassGenerator(project);
  }

  generate() {
    const sourceFile = this.project.createSourceFile("./out/index.d.ts", "", {
      overwrite: true,
    });

    this.addHeader(sourceFile);
    sourceFile.addStatements([
      `/// <reference path="./enums.d.ts" />`,
      `/// <reference path="./bitfields.d.ts" />`,
      `/// <reference path="./classes.d.ts" />`,
      `/// <reference path="./precomputed.d.ts" />`,
    ]);

    this.funcGenerator.generate(sourceFile);
    this.classGenerator.generate(sourceFile);

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
