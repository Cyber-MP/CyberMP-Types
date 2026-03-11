import type { CName, ResRef, TweakDBID } from './shared';

export interface MpHashes {
  tweakdbid(path: string): TweakDBID;
  cname(path: string): CName;
  resref(path: string): ResRef;
}
