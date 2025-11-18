export class animAnimNode_RotationLimit extends animAnimNode_OnePoseInput {
  constrainedTransform?: animTransformIndex;
  limitOnX?: animSmoothFloatClamp;
  limitOnY?: animSmoothFloatClamp;
  limitOnZ?: animSmoothFloatClamp;
  useEyesLookAtBlendWeight?: boolean;
  weightLink?: animFloatLink;
}
