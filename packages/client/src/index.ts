import { consola } from 'consola';
import { capitalize } from 'radash';
import { rimraf } from 'rimraf';
import { defsIndex, project } from './config/constants';
import { getDumps } from './dumps';
import { BitfieldGenerator } from './generators/bitfield-generator';
import { EnumGenerator } from './generators/enum-generator';
import { GameGenerator } from './generators/game-generator';

const logDefsIndex = () => {
  consola.box(
    Object.entries(defsIndex)
      .map(([key, value]) => `${capitalize(key)}: ${value.size}`)
      .join('\n'),
  );
};

async function main() {
  await rimraf('./out');

  await getDumps();

  consola.start('Starting generation process...');
  const enumGenerator = new EnumGenerator(project);
  const bitfieldGenerator = new BitfieldGenerator(project);
  const gameGenerator = new GameGenerator(project);

  enumGenerator.generate();
  bitfieldGenerator.generate();
  gameGenerator.generate();

  consola.info('Generation process completed.');

  logDefsIndex();
}

void main();
