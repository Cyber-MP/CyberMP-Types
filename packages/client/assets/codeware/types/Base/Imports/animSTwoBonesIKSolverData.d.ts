export interface animSTwoBonesIKSolverData {
  upperBone?: animTransformIndex;
  jointBone?: animTransformIndex;
  subLowerBone?: animTransformIndex;
  lowerBone?: animTransformIndex;
  ikBone?: animTransformIndex;
  limitToLengthPercentage?: number;
  reverseBend?: boolean;
  allowToLock?: boolean;
  autoSetupDirs?: boolean;
  jointSideWeightUpper?: number;
  jointSideWeightJoint?: number;
  jointSideWeightLower?: number;
}
