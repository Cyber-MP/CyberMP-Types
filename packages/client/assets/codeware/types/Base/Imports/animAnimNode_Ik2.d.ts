export class animAnimNode_Ik2 extends animAnimNode_Base {
  firstBone?: animTransformIndex;
  secondBone?: animTransformIndex;
  endBone?: animTransformIndex;
  hingeAxis?: animAxis;
  minHingeAngleDegrees?: number;
  maxHingeAngleDegrees?: number;
  firstBoneIkGain?: number;
  secondBoneIkGain?: number;
  endBoneIkGain?: number;
  enforceEndPosition?: boolean;
  enforceEndOrientation?: boolean;
  endBoneOffsetPositionLS?: { x: number; y: number; z: number; w: number };
  bone?: animTransformIndex;
  floatTrack?: animNamedTrackIndex;
  inputPoseNode?: animPoseLink;
  weightNode?: animFloatLink;
  endTargetPositionNode?: animVectorLink;
  endTargetOrientationNode?: animQuaternionLink;
}
