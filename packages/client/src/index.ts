import { Logger } from "./utils/logger";
import { EnumGenerator } from "./generators/enum-generator";
import { defsIndex, project } from "./config/constants";
import { rimraf } from "rimraf";
import fs from "fs";
import { BitfieldGenerator } from "./generators/bitfield-generator";
import { IndexGenerator } from "./generators/index-generator";

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
  const indexGenerator = new IndexGenerator(project);

  enumGenerator.generate();
  bitfieldGenerator.generate();
  indexGenerator.generate();

  copyPrecomputedFiles();

  Logger.info("Generation process completed.");
  console.log(Object.values(defsIndex).map((o) => o.size));

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
}

void main();
