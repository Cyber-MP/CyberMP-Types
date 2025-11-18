export interface animImportFacialCorrectivePoseDesc {
  influencedBy?: string[];
  influenceMainWeightIndices?: number[];
  poses?: animImportFacialCorrectivePoseDataDesc[];
  parentsInBetweenIndices?: number[];
  parentIndices?: number[];
  name?: string;
  index?: number;
  influencedBySpeed?: number;
  poseType?: number;
  poseLOD?: number;
  weights?: number[];
  inBetweenScopeMultipliers?: number[];
  linearCorrection?: boolean;
  useGlobalWeight?: boolean;
}
