export interface animImportFacialMainPoseDesc {
  influencedBy?: string[];
  influenceMainWeightIndices?: number[];
  poses?: animImportFacialPoseDesc[];
  poseIndices?: number[];
  weights?: number[];
  inBetweenScopeMultipliers?: number[];
  name?: string;
  index?: number;
  influenceType?: number;
  side?: number;
  facePart?: number;
}
