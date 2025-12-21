import fs from "fs-extra";
import path from "path";
import { consola } from 'consola';

const files = ["classes.json", "globals.json", "bitfields.json", "enums.json"];

async function prettifyEdited() {
  for (const file of files) {
    const inputFile = path.resolve("edited", file); // <-- apply patch to these

    const data = await fs.readJson(inputFile);

    await fs.writeJson(inputFile, data, { spaces: 2 });

    consola.success(`Prettified → ${inputFile}`);
  }
}

prettifyEdited();
