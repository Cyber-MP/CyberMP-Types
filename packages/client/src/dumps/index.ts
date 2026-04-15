import { glob } from 'glob';

const cache = new Map<string, any>();

export const getClasses = async () => {};

export const getDumps = async () => {
  const files = await glob('./assets/dumps/classes/*.json');
  console.log(await import(files[10455]));
  // require(files).then(console.log);
};
// export const
