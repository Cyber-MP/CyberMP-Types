export class communitySpawnPhase extends ISerializable {
  phaseName?: string;
  appearances?: string[];
  timePeriods?: communityPhaseTimePeriod[];
  alwaysSpawned?: gameAlwaysSpawnedState;
  prefetchAppearance?: boolean;
}
