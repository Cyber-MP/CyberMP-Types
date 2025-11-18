export class PopulationSpawnerWrapper {
  IsActive(): boolean;
  IsInitialized(): boolean;
  GetRecordID(): TweakDBID;
  GetAppearanceName(): string;
  GetTransform(): WorldTransform;
  GetActiveEntityIDs(): string[];
  GetRestoredEntityIDs(): string[];
  GetSpawnedEntityIDs(): string[];
  GetReservedEntityIDs(): string[];
}
