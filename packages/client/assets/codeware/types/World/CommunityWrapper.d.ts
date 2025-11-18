export class CommunityEntryWrapper {
  IsActive(): boolean;
  GetName(): string;
  GetPhases(): string[];
  GetRestoredEntityIDs(): string[];
  GetSpawnedEntityIDs(): string[];
  GetSpawningEntityIDs(): string[];
  GetReservedEntityIDs(): string[];
  GetTemplateEntryData(): communitySpawnEntry;
}

export class CommunityWrapper {
  GetEntries(): CommunityEntryWrapper[];
  GetActiveEntityIDs(): string[];
  GetTemplateData(): communityCommunityTemplateData;
}
