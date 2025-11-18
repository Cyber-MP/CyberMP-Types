export class scnPlayFPPControlAnimEvent extends scnPlayAnimEvent {
  gameplayAnimName?: scnAnimName;
  FPPControlActive?: boolean;
  blendOverride?: scnfppBlendOverride;
  cameraUseTrajectorySpace?: boolean;
  cameraBlendInDuration?: number;
  cameraBlendOutDuration?: number;
  stayInScene?: boolean;
  idleIsMountedWorkspot?: boolean;
  enableWorldSpaceSmoothing?: boolean;
  isSceneCarrying?: boolean;
  cameraParallaxWeight?: number;
  cameraParallaxSpace?: scnfppParallaxSpace;
  vehicleProceduralCameraWeight?: number;
  yawLimitLeft?: number;
  yawLimitRight?: number;
  pitchLimitTop?: number;
  pitchLimitBottom?: number;
  genderSpecificParams?: scnfppGenderSpecificParams[];
}
