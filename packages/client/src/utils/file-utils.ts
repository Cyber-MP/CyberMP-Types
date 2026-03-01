import fs from 'node:fs';

export function readJsonFiles<T>(dir: string): T[] {
  const files = fs.readdirSync(dir);
  return files.map((file) =>
    JSON.parse(fs.readFileSync(`${dir}/${file}`, 'utf8')),
  );
}

export function uniqueBy<T>(arr: T[], key: (item: T) => string): T[] {
  const seen = new Set<string>();

  return arr.filter((item) => {
    const k = key(item);
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
}
