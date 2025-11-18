export interface gameWeaponReplicationHistory {
  weaponSlot?: TweakDBID;
  shots?: any;
  latestShotId?: number;
  continuousAttack?: gameReplicatedContinuousAttack;
}
