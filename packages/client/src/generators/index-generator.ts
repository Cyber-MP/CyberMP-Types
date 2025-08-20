import { BaseGenerator } from "./base-generator";
import { Project, VariableDeclarationKind } from "ts-morph";
import { ClassGenerator } from "./class-generator";
import { FuncGenerator } from "./func-generator";
import { Logger } from "../utils/logger";

export class IndexGenerator extends BaseGenerator {
  private funcGenerator: FuncGenerator;
  private classGenerator: ClassGenerator;

  constructor(project: Project) {
    super(project);

    this.funcGenerator = new FuncGenerator(project);
    this.classGenerator = new ClassGenerator(project);
  }

  generate() {
    const sourceFile = this.createSourceFile("./out/index.d.ts");

    this.addHeader(sourceFile);
    sourceFile.addStatements([
      `/// <reference path="./globals.d.ts" />`,
      `/// <reference path="./enums.d.ts" />`,
      `/// <reference path="./bitfields.d.ts" />`,
      `/// <reference path="./classes.d.ts" />`,
    ]);

    this.classGenerator.generate(sourceFile);
    this.funcGenerator.generate(sourceFile);

    sourceFile.addInterface({
      name: "MpGame",
      extends: ["MpFuncs", "MpClasses"],
    });

    sourceFile.addInterface({
      name: "Mp",
      properties: [{ name: "game", type: "MpGame" }],
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
