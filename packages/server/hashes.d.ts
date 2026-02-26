/// <reference path="./shared.d.ts" />

interface MpHashes {
  tweakdbid(path: string): TweakDBID;
  cname(path: string): CName;
  resref(path: string): ResRef;
}
