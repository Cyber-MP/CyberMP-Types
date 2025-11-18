export class animAnimNode_LookAtPose360 extends animAnimNode_Base {
  speedInDegreesPerSecond?: number;
  angleOffsetNode?: animFloatLink;
  targetAngleOffsetNode?: animFloatLink;
  weightNode?: animFloatLink;
  animEndEventName?: string;
  animation?: string;
  durationCut?: number;
}
