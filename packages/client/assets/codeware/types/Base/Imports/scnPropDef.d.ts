export interface scnPropDef {
  propId?: scnPropId;
  propName?: string;
  specPropRecordId?: TweakDBID;
  animSets?: scnRidAnimSetSRRefId[];
  cinematicAnimSets?: scnCinematicAnimSetSRRefId[];
  dynamicAnimSets?: scnDynamicAnimSetSRRefId[];
  entityAcquisitionPlan?: scnEntityAcquisitionPlan;
  findEntityInEntityParams?: scnFindEntityInEntityParams;
  spawnDespawnParams?: scnSpawnDespawnEntityParams;
  spawnSetParams?: scnSpawnSetParams;
  communityParams?: scnCommunityParams;
  spawnerParams?: scnSpawnerParams;
  findEntityInNodeParams?: scnFindEntityInNodeParams;
  findEntityInWorldParams?: scnFindEntityInWorldParams;
}
