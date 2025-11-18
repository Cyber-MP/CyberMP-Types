export interface gamePlayerSpawnParams {
  isSpectator?: boolean;
  spawnPoint?: Transform;
  recordId?: TweakDBID;
  gender?: string;
  useSpecifiedStartPoint?: boolean;
  spawnTags?: redTagList;
  nickname?: string;
}
