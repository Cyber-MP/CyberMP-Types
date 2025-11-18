export interface scnSpawnDespawnEntityParams {
  dynamicEntityUniqueName?: string;
  spawnMarker?: string;
  spawnMarkerType?: scnMarkerType;
  spawnMarkerNodeRef?: string;
  spawnOffset?: Transform;
  itemOwnerId?: scnPerformerId;
  specRecordId?: TweakDBID;
  appearance?: string;
  spawnOnStart?: boolean;
  isEnabled?: boolean;
  validateSpawnPostion?: boolean;
  alwaysSpawned?: boolean;
  keepAlive?: boolean;
  findInWorld?: boolean;
  forceMaxVisibility?: boolean;
  prefetchAppearance?: boolean;
}
