export class animAnimNode_MotionAdjuster extends animAnimNode_Base {
  inputNode?: animPoseLink;
  targetPosition?: animVectorLink;
  targetDirection?: animVectorLink;
  totalTimeToAdjust?: animFloatLink;
  forwardVector?: { x: number; y: number; z: number; w: number };
}
