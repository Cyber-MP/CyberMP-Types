export interface gameweaponGrenadeReplicatedState {
  recordID?: TweakDBID;
  persistentID?: bigint;
  instigator?: wref;
  itemID?: ItemID;
  currentTransform?: WorldTransform;
  exploded?: boolean;
  launched?: boolean;
}
