export class questCharacterManagerCombat_EquipWeapon extends questICharacterManagerCombat_NodeSubType {
  equip?: boolean;
  weaponID?: TweakDBID;
  slotID?: TweakDBID;
  equipLastWeapon?: boolean;
  forceFirstEquip?: boolean;
  instant?: boolean;
  ignoreStateMachine?: boolean;
}
