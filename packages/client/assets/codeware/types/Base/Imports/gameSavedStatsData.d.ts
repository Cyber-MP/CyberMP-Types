export interface gameSavedStatsData {
  statModifiers?: gameStatModifierData[];
  inactiveStats?: gamedataStatType[];
  recordID?: TweakDBID;
  seed?: number;
}
