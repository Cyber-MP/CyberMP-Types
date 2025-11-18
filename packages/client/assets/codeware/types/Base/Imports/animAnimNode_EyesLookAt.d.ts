export class animAnimNode_EyesLookAt extends animAnimNode_OnePoseInput {
  targetALink?: animVectorLink;
  weightALink?: animFloatLink;
  targetBLink?: animVectorLink;
  weightBLink?: animFloatLink;
  transitionWeightLink?: animFloatLink;
  leftEye?: animTransformIndex;
  rightEye?: animTransformIndex;
  head?: animTransformIndex;
  forwardDirection?: animAxis;
}
