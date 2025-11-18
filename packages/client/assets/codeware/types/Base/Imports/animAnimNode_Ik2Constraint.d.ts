export class animAnimNode_Ik2Constraint extends animAnimNode_OnePoseInput {
  inputTarget?: animIAnimNodeSourceChannel_Vector;
  inputPoleVector?: animIAnimNodeSourceChannel_Vector;
  inputTargetOrientation?: animAnimNodeSourceChannel_WeightedQuat;
  firstBoneIndex?: animTransformIndex;
  secondBoneIndex?: animTransformIndex;
  endBoneIndex?: animTransformIndex;
  hingeAxis?: animAxis;
  twistValue?: number;
  weight?: number;
  weightFloatTrack?: animNamedTrackIndex;
  weightNode?: animFloatLink;
  twistNode?: animFloatLink;
  maxHingeAngle?: number;
}
