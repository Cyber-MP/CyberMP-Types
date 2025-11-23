import { Logger } from "./utils/logger";
import { EnumGenerator } from "./generators/enum-generator";
import { project } from "./config/constants";
import { rimraf } from "rimraf";
import fs from "fs";
import { BitfieldGenerator } from "./generators/bitfield-generator";
import { IndexGenerator } from "./generators/index-generator";
import { ClassGenerator } from "./generators/class-generator";
import { CodewareGenerator } from "./generators/codeware-generator";
import * as path from "path";

const copyPrecomputedFiles = () => {
  const precomputedDir = "./src/precomputed";
  const outputDir = "./out";

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const fileOrder = [
    "primitives.d.ts",
    "enums.d.ts",
    "classes.d.ts",
    "meta.d.ts",
    "events.d.ts",
    "game.d.ts",
    "global.d.ts",
  ];

  const outputPath = path.join(outputDir, "precomputed.d.ts");
  let combinedContent =
    "// THIS CODE IS GENERATED, PLEASE DO NOT EDIT THIS\n\n";

  for (const fileName of fileOrder) {
    const filePath = path.join(precomputedDir, fileName);
    if (fs.existsSync(filePath)) {
      let content = fs.readFileSync(filePath, "utf-8");

      content = content.replace(
        /\/\/\/ <reference path="\.\/[^"]+" \/>\s*/g,
        ""
      );
      content = content.replace(
        /\/\/\/ <reference path="\.\.\/[^"]+" \/>\s*/g,
        ""
      );

      combinedContent += `// === ${fileName} ===\n\n`;
      combinedContent += content.trim();
      combinedContent += "\n\n";
    }
  }

  fs.writeFileSync(outputPath, combinedContent, "utf-8");

  Logger.info("Precomputed files merged into precomputed.d.ts");
};

async function main() {
  await rimraf("./out");

  Logger.info("Starting generation process...");
  const enumGenerator = new EnumGenerator(project);
  const bitfieldGenerator = new BitfieldGenerator(project);

  const classGenerator = new ClassGenerator(project);

  enumGenerator.generate();
  bitfieldGenerator.generate();

  classGenerator.generate(
    project.createSourceFile("./out/classes.d.ts", "", { overwrite: true })
  );

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
