export class questCharacterEquippedItem_ConditionType extends questICharacterConditionType {
  isPlayer?: boolean;
  puppetRef?: EntityReference;
  itemID?: TweakDBID;
  itemTag?: string;
  excludedTweakDBIDs?: TweakDBID[];
  excludedTags?: string[];
  inverted?: boolean;
}
