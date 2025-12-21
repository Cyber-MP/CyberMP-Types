import jsonpatch from "fast-json-patch";
import fs from "fs-extra";
import path from "path";
import { consola } from 'consola';

const files = ["classes.json", "globals.json", "bitfields.json", "enums.json"];

async function generatePatches() {
  for (const file of files) {
    const originalPath = path.resolve("assets", file);
    const editedPath = path.resolve("edited", file);
    const patchPath = path.resolve(
      "patches",
      file.replace(".json", ".patch.json"),
    );

    const original = await fs.readJson(originalPath);
    const edited = await fs.readJson(editedPath);

    const patch = jsonpatch.compare(original, edited);

    await fs.outputJson(patchPath, patch, { spaces: 2 });

    consola.success(`Generated patch → ${patchPath}`);
  }
}

generatePatches();
