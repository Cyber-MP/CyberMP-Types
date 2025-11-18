export interface animImportFacialSetupDesc {
  initialPose?: animImportFacialInitialPoseEntryDesc[];
  initialControls?: animImportFacialInitialControlsDesc;
  mainPoses?: animImportFacialMainPoseDesc[];
  mainPosesInfo?: animSermoPoseInfo[];
  jawAreaTrackIndices?: number[];
  lipsAreaTrackIndices?: number[];
  eyesAreaTrackIndices?: number[];
  numCachedPoseTracks?: number;
  correctivePoses?: animImportFacialCorrectivePoseDesc[];
  globalPoseLimits?: animPoseLimitWeights[];
  wrinkleStartingIndex?: number;
  wrinkleMapping?: number[];
}
