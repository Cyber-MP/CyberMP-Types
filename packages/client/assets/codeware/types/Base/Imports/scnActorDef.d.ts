export interface scnActorDef {
  actorId?: scnActorId;
  voicetagId?: scnVoicetagId;
  acquisitionPlan?: scnEntityAcquisitionPlan;
  findActorInContextParams?: scnFindEntityInContextParams;
  findActorInWorldParams?: scnFindEntityInWorldParams;
  spawnDespawnParams?: scnSpawnDespawnEntityParams;
  spawnSetParams?: scnSpawnSetParams;
  communityParams?: scnCommunityParams;
  spawnerParams?: scnSpawnerParams;
  animSets?: scnSRRefId[];
  lipsyncAnimSet?: scnLipsyncAnimSetSRRefId;
  facialAnimSets?: scnRidFacialAnimSetSRRefId[];
  cyberwareAnimSets?: scnRidCyberwareAnimSetSRRefId[];
  deformationAnimSets?: scnRidDeformationAnimSetSRRefId[];
  bodyCinematicAnimSets?: scnCinematicAnimSetSRRefId[];
  facialCinematicAnimSets?: scnCinematicAnimSetSRRefId[];
  cyberwareCinematicAnimSets?: scnCinematicAnimSetSRRefId[];
  dynamicAnimSets?: scnDynamicAnimSetSRRefId[];
  holocallInitScn?: ResourceAsyncRef;
  actorName?: string;
  specCharacterRecordId?: TweakDBID;
  specAppearance?: string;
}
