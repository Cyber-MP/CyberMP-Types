import { Project, VariableDeclarationKind } from "ts-morph";
import { Logger } from "../utils/logger";
import { BaseGenerator } from "./base-generator";
import { ClassGenerator } from "./class-generator";
import { FuncGenerator } from "./func-generator";
import { CodewareGenerator } from "./codeware-generator";
import * as fs from "fs";
import * as path from "path";

export class IndexGenerator extends BaseGenerator {
  private funcGenerator: FuncGenerator;
  private classGenerator: ClassGenerator;
  private codewareGenerator?: CodewareGenerator;

  constructor(
    project: Project,
    codewareGenerator?: CodewareGenerator,
    classGenerator?: ClassGenerator
  ) {
    super(project);

    this.funcGenerator = new FuncGenerator(project);
    this.classGenerator = classGenerator || new ClassGenerator(project);
    this.codewareGenerator = codewareGenerator;
  }

  generate() {
    const sourceFile = this.project.createSourceFile("./out/index.d.ts", "", {
      overwrite: true,
    });

    this.addHeader(sourceFile);
    sourceFile.addStatements([
      `/// <reference path="./precomputed.d.ts" />`,
      `/// <reference path="./enums.d.ts" />`,
      `/// <reference path="./bitfields.d.ts" />`,
      `/// <reference path="./classes.d.ts" />`,
      `/// <reference path="./codeware.d.ts" />`,
    ]);

    this.funcGenerator.generate(sourceFile);
    this.classGenerator.generate(sourceFile);

    const mpGameExtends = ["MpGamePrecomputed", "MpFuncs", "MpClasses"];

    const codewareFilePath = path.join(process.cwd(), "out", "codeware.d.ts");
    if (fs.existsSync(codewareFilePath)) {
      mpGameExtends.push("CodewareClasses");
    }

    sourceFile.addInterface({
      name: "MpGame",
      extends: mpGameExtends,
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
