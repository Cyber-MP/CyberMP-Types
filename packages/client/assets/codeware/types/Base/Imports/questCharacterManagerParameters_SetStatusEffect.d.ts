export class questCharacterManagerParameters_SetStatusEffect extends questICharacterManagerParameters_NodeSubType {
  puppetRef?: EntityReference;
  isPlayer?: boolean;
  statusEffectID?: TweakDBID;
  isPlayerStatusEffectSource?: boolean;
  statusEffectSourceObject?: EntityReference;
  recordSelector?: questRecordSelector;
  set?: boolean;
}
