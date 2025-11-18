export class animAnimNode_Drag extends animAnimNode_OnePoseInput {
  sourceBone?: animTransformIndex;
  outTargetBone?: animTransformIndex;
  simulationFps?: number;
  sourceSpeedMultiplier?: number;
  hasOvershoot?: boolean;
  overshootDuration?: number;
  overshootDetectionMinSpeed?: number;
  overshootDetectionMaxSpeed?: number;
  useSteps?: boolean;
  stepsTargetSpeedMultiplier?: number;
  timeBetweenSteps?: number;
  timeInStep?: number;
}
