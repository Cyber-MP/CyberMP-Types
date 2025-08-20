import { Logger } from "./utils/logger";
import { EnumGenerator } from "./generators/enum-generator";
import { BitfieldGenerator } from "./generators/bitfield-generator";
import { IndexGenerator } from "./generators/index-generator";
import { defsIndex, project } from "./config/constants";
import { unknownTypes } from "./utils/type-resolver";
import { GenericGenerator } from "./generators/generic-generator";
import { rimraf } from "rimraf";

async function main() {
  await rimraf("./out");

  Logger.info("Starting generation process...");
  const genericGenerator = new GenericGenerator(project);
  const enumGenerator = new EnumGenerator(project);
  const bitfieldGenerator = new BitfieldGenerator(project);
  const indexGenerator = new IndexGenerator(project);

  genericGenerator.generate();
  enumGenerator.generate();
  bitfieldGenerator.generate();
  indexGenerator.generate();

  Logger.info("Generation process completed.");
  console.log(Object.values(defsIndex).map((o) => o.size));
  console.log(unknownTypes.length);
}

void main();
