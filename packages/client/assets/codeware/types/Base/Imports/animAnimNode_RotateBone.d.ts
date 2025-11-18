export class animAnimNode_RotateBone extends animAnimNode_Base {
  inputNode?: animPoseLink;
  angleNode?: animFloatLink;
  minValueNode?: animFloatLink;
  maxValueNode?: animFloatLink;
  bone?: animTransformIndex;
  axis?: animETransformAxis;
  scale?: number;
  biasAngle?: number;
  minAngle?: number;
  maxAngle?: number;
  clampRotation?: boolean;
  useIncrementalMode?: boolean;
  resetOnActivation?: boolean;
  inModelSpace?: boolean;
}
