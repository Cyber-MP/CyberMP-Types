import fs from 'node:fs';
import fsPromise from 'node:fs/promises';

export function readJsonFiles<T>(dir: string): T[] {
  const files = fs.readdirSync(dir);
  return files.map((file) =>
    JSON.parse(fs.readFileSync(`${dir}/${file}`, 'utf8')),
  );
}

export const readJsonFile = async (path: string) => {
  const data = await fsPromise.readFile(path, 'utf-8');
  return JSON.parse(data);
};

export function uniqueBy<T>(arr: T[], key: (item: T) => string): T[] {
  const seen = new Set<string>();

  return arr.filter((item) => {
    const k = key(item);
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
}
