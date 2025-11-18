export interface gameStatPoolData {
  ownerID?: StatsObjectID;
  recordID?: TweakDBID;
  type?: gamedataStatPoolType;
  modifiers?: any;
  alternativeModifierRecords?: any;
  stat?: gamedataStatType;
  maxValue?: number;
  customLimitValue?: number;
  changeMode?: gameStatPoolDataValueChangeMode;
  bonus?: number;
  bonusType?: gameStatPoolDataBonusType;
  currentValue?: number;
  modificationDelay?: number;
  modificationStatus?: gameStatPoolDataStatPoolModificationStatus;
}
