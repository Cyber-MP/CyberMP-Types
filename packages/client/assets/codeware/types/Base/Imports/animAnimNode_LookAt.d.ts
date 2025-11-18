export class animAnimNode_LookAt extends animAnimNode_OnePoseInput {
  transform?: animTransformIndex;
  forwardAxis?: animAxis;
  useLimits?: boolean;
  limitAxis?: animAxis;
  limitAngle?: number;
  targetNode?: animVectorLink;
  weightNode?: animFloatLink;
}
