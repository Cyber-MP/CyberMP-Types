import { Logger } from "./utils/logger";
import { project } from "./config/constants";
import { CodewareGenerator } from "./generators/codeware-generator";
import * as path from "path";
import { rimraf } from "rimraf";

async function main() {
  const codewareDir = path.join(__dirname, "../assets/codeware");
  console.log(codewareDir);
  const outputDir = path.join(__dirname, "../out/codeware");
  await rimraf(outputDir);

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
