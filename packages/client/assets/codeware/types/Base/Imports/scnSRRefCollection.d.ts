export interface scnSRRefCollection {
  ridAnimations?: scnRidAnimationSRRef[];
  ridAnimSets?: scnRidAnimSetSRRef[];
  ridFacialAnimSets?: scnRidAnimSetSRRef[];
  ridCyberwareAnimSets?: scnRidAnimSetSRRef[];
  ridDeformationAnimSets?: scnRidAnimSetSRRef[];
  lipsyncAnimSets?: scnLipsyncAnimSetSRRef[];
  ridCameraAnimations?: scnRidCameraAnimationSRRef[];
  cinematicAnimSets?: scnCinematicAnimSetSRRef[];
  gameplayAnimSets?: scnGameplayAnimSetSRRef[];
  dynamicAnimSets?: scnDynamicAnimSetSRRef[];
  cinematicAnimNames?: scnAnimSetAnimNames[];
  gameplayAnimNames?: scnAnimSetAnimNames[];
  dynamicAnimNames?: scnAnimSetDynAnimNames[];
  ridAnimationContainers?: scnRidAnimationContainerSRRef[];
}
