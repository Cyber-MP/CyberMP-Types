import fs from 'node:fs';
import { consola } from 'consola';
import { rimraf } from 'rimraf';
import { defsIndex } from './config/constants';
import { getDumps } from './dumps';
import { capitalizeFirstLetter } from './utils/string';

const copyPrecomputedFiles = () => {
  fs.cpSync('./src/precomputed', './out/precomputed', { recursive: true });
};

const logDefsIndex = () => {
  consola.box(
    Object.entries(defsIndex)
      .map(([key, value]) => `${capitalizeFirstLetter(key)}: ${value.size}`)
      .join('\n'),
  );
};

async function main() {
  await rimraf('./out');

  getDumps();
  // const modules = await Promise.all(
  //   [...files].map((file) => import(new URL(file, import.meta.url).pathname)),
  // );

  // consola.start('Starting generation process...');
  // const enumGenerator = new EnumGenerator(project);
  // const bitfieldGenerator = new BitfieldGenerator(project);
  // const mpGenerator = new MpGenerator(project);
  // const gameGenerator = new GameGenerator(project);

  // enumGenerator.generate();
  // bitfieldGenerator.generate();
  // gameGenerator.generate();
  // mpGenerator.generate();

  // copyPrecomputedFiles();

  // consola.info('Generation process completed.');

  // logDefsIndex();
}

void main();
