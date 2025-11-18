export interface scnPlayerActorDef {
  actorId?: scnActorId;
  specTemplate?: string;
  specCharacterRecordId?: TweakDBID;
  specAppearance?: string;
  voicetagId?: scnVoicetagId;
  animSets?: scnSRRefId[];
  lipsyncAnimSet?: scnLipsyncAnimSetSRRefId;
  facialAnimSets?: scnRidFacialAnimSetSRRefId[];
  cyberwareAnimSets?: scnRidCyberwareAnimSetSRRefId[];
  deformationAnimSets?: scnRidDeformationAnimSetSRRefId[];
  bodyCinematicAnimSets?: scnCinematicAnimSetSRRefId[];
  facialCinematicAnimSets?: scnCinematicAnimSetSRRefId[];
  cyberwareCinematicAnimSets?: scnCinematicAnimSetSRRefId[];
  dynamicAnimSets?: scnDynamicAnimSetSRRefId[];
  acquisitionPlan?: scnEntityAcquisitionPlan;
  findNetworkPlayerParams?: scnFindNetworkPlayerParams;
  findActorInContextParams?: scnFindEntityInContextParams;
  playerName?: string;
}
