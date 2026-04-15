import path from 'node:path';
import jsonpatch from 'fast-json-patch';
import { glob } from 'glob';
import { readJsonFile } from '../utils/file-utils';

export const dumps = {
  classes: [],
  enums: [],
  bitfields: [],
  globals: [],
};

export const getClasses = async () => {
  const patchesFiles = await glob('./assets/dumps-patches/classes/*.json');

  const classFiles = await glob('./assets/dumps/classes/*.json');
  const results = [];

  const BATCH_SIZE = 100;

  for (let i = 0; i < classFiles.length; i += BATCH_SIZE) {
    const batch = classFiles.slice(i, i + BATCH_SIZE);

    const chunk = await Promise.all(
      batch.map(async (classPath) => {
        const classDef = await readJsonFile(classPath);
        const patchPath = patchesFiles.find(
          (o) => path.parse(o).name === classDef.b,
        );
        if (patchPath) {
          const patch = await readJsonFile(patchPath);

          jsonpatch.applyPatch(classDef, patch, true).newDocument;
        }

        return classDef;
      }),
    );

    results.push(...chunk);
  }

  return results;
};

export const getEnums = async () => {
  const patchesFiles = await glob('./assets/dumps-patches/enums/*.json');

  const enumFiles = await glob('./assets/dumps/enums/*.json');
  const results = [];

  const BATCH_SIZE = 100;

  for (let i = 0; i < enumFiles.length; i += BATCH_SIZE) {
    const batch = enumFiles.slice(i, i + BATCH_SIZE);

    const chunk = await Promise.all(
      batch.map(async (classPath) => {
        const enumDef = await readJsonFile(classPath);
        const patchPath = patchesFiles.find(
          (o) => path.parse(o).name === enumDef.a,
        );
        if (patchPath) {
          const patch = await readJsonFile(patchPath);

          jsonpatch.applyPatch(enumDef, patch, true).newDocument;
        }

        return enumDef;
      }),
    );

    results.push(...chunk);
  }

  return results;
};

export const getBitfields = async () => {
  const patchesFiles = await glob('./assets/dumps-patches/bitfields/*.json');

  const bitfieldFiles = await glob('./assets/dumps/bitfields/*.json');
  const results = [];

  const BATCH_SIZE = 100;

  for (let i = 0; i < bitfieldFiles.length; i += BATCH_SIZE) {
    const batch = bitfieldFiles.slice(i, i + BATCH_SIZE);

    const chunk = await Promise.all(
      batch.map(async (classPath) => {
        const bitfieldDef = await readJsonFile(classPath);
        const patchPath = patchesFiles.find(
          (o) => path.parse(o).name === bitfieldDef.a,
        );
        if (patchPath) {
          const patch = await readJsonFile(patchPath);

          jsonpatch.applyPatch(bitfieldDef, patch, true).newDocument;
        }

        return bitfieldDef;
      }),
    );

    results.push(...chunk);
  }

  return results;
};

export const getGlobals = async () => {
  const globals = await readJsonFile('assets/dumps/globals.json');
  const patches = await readJsonFile('assets/dumps-patches/globals.json');

  jsonpatch.applyPatch(globals, patches, true).newDocument;

  return globals;
};

export const getDumps = async () => {
  dumps.classes = await getClasses();
  dumps.enums = await getEnums();
  dumps.bitfields = await getBitfields();
  dumps.globals = await getGlobals();
};
