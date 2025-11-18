export class worldPopulationSpawnerNode extends worldNode {
  objectRecordId?: TweakDBID;
  appearanceName?: string;
  spawnOnStart?: boolean;
  alwaysSpawned?: gameAlwaysSpawnedState;
  spawnInView?: gameSpawnInViewState;
  prefetchAppearance?: boolean;
  isVehicle?: boolean;
}
