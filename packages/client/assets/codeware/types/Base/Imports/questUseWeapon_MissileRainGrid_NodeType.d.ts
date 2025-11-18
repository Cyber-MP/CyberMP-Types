export class questUseWeapon_MissileRainGrid_NodeType extends questUseWeapon_NodeType {
  source?: questEUseWeapon_MissileOffsetsSource;
  missileOffsets?: { x: number; y: number; z: number }[];
  targetRefs?: EntityReference[];
  recordID?: TweakDBID;
}
