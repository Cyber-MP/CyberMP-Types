import { Logger } from "./utils/logger";
import { EnumGenerator } from "./generators/enum-generator";
import { defsIndex, project } from "./config/constants";
import { rimraf } from "rimraf";
import fs from "fs";
import { BitfieldGenerator } from "./generators/bitfield-generator";
import { IndexGenerator } from "./generators/index-generator";

const copyPrecomputedFiles = () => {
  fs.copyFileSync("./src/precomputed.d.ts", "./out/precomputed.d.ts");
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
  // console.log(unknownTypes.length);
}

void main();
