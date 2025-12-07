import jsonpatch from "fast-json-patch";
import fs from "fs-extra";
import path from "path";
import { consola } from 'consola';

const files = ["classes.json", "globals.json", "bitfields.json", "enums.json"];

async function applyPatches() {
  for (const file of files) {
    const inputFile = path.resolve("assets", file); // <-- apply patch to these
    const patchFile = path.resolve(
      "patches",
      file.replace(".json", ".patch.json"),
    );
    const outputFile = path.resolve("assets", file); // overwrite OR change to 'output/' folder if you want

    const data = await fs.readJson(inputFile);
    const patch = await fs.readJson(patchFile);

    const updated = jsonpatch.applyPatch(data, patch).newDocument;

    await fs.writeJson(outputFile, updated, { spaces: 0  });

    consola.success(`Applied patch → ${inputFile}`);
  }
}

applyPatches();
