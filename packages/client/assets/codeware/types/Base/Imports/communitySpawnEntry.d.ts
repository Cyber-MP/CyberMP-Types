export class communitySpawnEntry extends ISerializable {
  entryName?: string;
  characterRecordId?: TweakDBID;
  phases?: communitySpawnPhase[];
  spawnInView?: gameSpawnInViewState;
  initializers?: communitySpawnInitializer[];
}
