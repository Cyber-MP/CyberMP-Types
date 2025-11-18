export class worldCurvePathNode extends worldSplineNode {
  userInput?: animCurvePathBakerUserInput;
  defaultForwardVector?: { x: number; y: number; z: number; w: number };
  globalInBlendTime?: number;
  globalOutBlendTime?: number;
  defaultPoseAnimationName?: string;
  defaultPoseSampleTime?: number;
  initialDiffYaw?: number;
  turnCharacterToMatchVelocity?: boolean;
  rig?: ResourceRef;
  animSets?: ResourceRef[];
  timeDeltaMultiplier?: number;
}
