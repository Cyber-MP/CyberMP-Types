import { consola } from "consola";
import fs from "fs";
import { rimraf } from "rimraf";
import { defsIndex, project } from "./config/constants";
import { BitfieldGenerator } from "./generators/bitfield-generator";
import { EnumGenerator } from "./generators/enum-generator";
import { IndexGenerator } from "./generators/index-generator";
import { capitalizeFirstLetter } from "./utils/string";
import { wikiClient } from "./wiki";

const copyPrecomputedFiles = () => {
  fs.cpSync("./src/precomputed", "./out/precomputed", { recursive: true });
};

const logDefsIndex = () => {
  consola.box(
    Object.entries(defsIndex)
      .map(([key, value]) => `${capitalizeFirstLetter(key)}: ${value.size}`)
      .join("\n"),
  );
};

async function main() {
  // const a = await wikiClient.getClass("entEntity");
  // console.log(await wikiParser.parseClass(a, "entEntity"));

  await rimraf("./out");

  consola.start("Starting generation process...");
  await wikiClient.loadClasses();

  const enumGenerator = new EnumGenerator(project);
  const bitfieldGenerator = new BitfieldGenerator(project);
  const indexGenerator = new IndexGenerator(project);

  enumGenerator.generate();
  bitfieldGenerator.generate();
  await indexGenerator.generate();

  copyPrecomputedFiles();

  consola.info("Generation process completed.");

  logDefsIndex();
}

void main();
