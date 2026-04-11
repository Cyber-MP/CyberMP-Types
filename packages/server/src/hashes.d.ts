import type { CName, ResRef, TweakDBID } from './shared';

/**
 * Converts a path/name to any game hash type.
 * @category Hashes
 */
export interface MpHashes {
  tweakdbid(path: string): TweakDBID;
  cname(path: string): CName;
  resref(path: string): ResRef;
}
