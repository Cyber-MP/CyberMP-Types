export class questCharacterManagerCombat_ModifyHealth extends questICharacterManagerCombat_NodeSubType {
  puppetRef?: EntityReference;
  isPlayer?: boolean;
  percent?: number;
  setExactValue?: boolean;
  noDamageIndicator?: boolean;
  damageSourceRef?: EntityReference;
}
