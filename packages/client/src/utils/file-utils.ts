import fsPromise from 'node:fs/promises';

export const readJsonFile = async (path: string) => {
  const data = await fsPromise.readFile(path, 'utf-8');
  return JSON.parse(data);
};
