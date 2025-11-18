export class questEquipItemParams extends AICommandParams {
  slotId?: TweakDBID;
  type?: questNodeType;
  itemId?: TweakDBID;
  equipDurationOverride?: number;
  unequipDurationOverride?: number;
  failIfItemNotFound?: boolean;
  instant?: boolean;
  equipLastWeapon?: boolean;
  forceFirstEquip?: boolean;
  ignoreStateMachine?: boolean;
  isPlayer?: boolean;
  equipTypes?: gameItemEquipContexts;
  unequipTypes?: gameItemUnequipContexts;
  byItem?: boolean;
}
