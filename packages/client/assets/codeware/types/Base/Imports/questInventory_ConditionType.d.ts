export class questInventory_ConditionType extends questIObjectConditionType {
  objectRef?: EntityReference;
  isPlayer?: boolean;
  itemID?: TweakDBID;
  itemTag?: string;
  quantity?: number;
  comparisonType?: EComparisonType;
}
