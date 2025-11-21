import { Logger } from "./utils/logger";
import { EnumGenerator } from "./generators/enum-generator";
import { defsIndex, project } from "./config/constants";
import { rimraf } from "rimraf";
import fs from "fs";
import { BitfieldGenerator } from "./generators/bitfield-generator";
import { IndexGenerator } from "./generators/index-generator";
import { ClassGenerator } from "./generators/class-generator";
import { CodewareGenerator } from "./generators/codeware-generator";
import * as path from "path";

const copyPrecomputedFiles = () => {
  fs.cpSync("./src/precomputed", "./out/precomputed", { recursive: true });
};

async function main() {
  await rimraf("./out");

  Logger.info("Starting generation process...");
  const enumGenerator = new EnumGenerator(project);
  const bitfieldGenerator = new BitfieldGenerator(project);
  
  const classGenerator = new ClassGenerator(project);

  enumGenerator.generate();
  bitfieldGenerator.generate();
  
  // Генерируем classes.d.ts перед codeware, чтобы можно было сравнить классы
  classGenerator.generate(project.createSourceFile("./out/classes.d.ts", "", { overwrite: true }));

  copyPrecomputedFiles();

  const codewareDir = path.join(__dirname, "../assets/codeware");
  const outputDir = path.join(__dirname, "../out/codeware");

  Logger.info("Starting Codeware types generation...");

  const codewareGenerator = new CodewareGenerator(
    project,
    codewareDir,
    outputDir
  );

  codewareGenerator.generate();

  Logger.info("Codeware types generation completed.");

  Logger.info("Starting index generation...");
  const indexGenerator = new IndexGenerator(
    project,
    codewareGenerator,
    classGenerator
  );
  indexGenerator.generate();

  Logger.info("Generation process completed.");
}

void main();
