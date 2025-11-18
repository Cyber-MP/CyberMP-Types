export interface inkMenuEntry {
  name?: string;
  menuWidget?: ResourceRef;
  depth?: number;
  spawnMode?: inkSpawnMode;
  isAffectedByFadeout?: boolean;
  inputContext?: string;
}
