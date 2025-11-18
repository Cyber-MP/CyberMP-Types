export class workEquipInventoryWeaponAction extends workIWorkspotItemAction {
  weaponType?: workWeaponType;
  keepEquippedAfterExit?: boolean;
  fallbackItem?: TweakDBID;
  fallbackSlot?: TweakDBID;
}
