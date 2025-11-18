export class animAnimNode_FootStepAdjuster extends animAnimNode_OnePoseInput {
  leftToeName?: animTransformIndex;
  rightToeName?: animTransformIndex;
  leftFootName?: animTransformIndex;
  rightFootName?: animTransformIndex;
  leftCalfName?: animTransformIndex;
  rightCalfName?: animTransformIndex;
  leftThighName?: animTransformIndex;
  rightThighName?: animTransformIndex;
  pelvisBoneName?: animTransformIndex;
  calfHingeAxis?: { x: number; y: number; z: number; w: number };
  IKBlendTime?: number;
  pelvisAdjustmentBlendSpeed?: number;
  adjustPelvisVertically?: boolean;
  stepAdjustmentInterval?: number;
  controlValueNode?: animFloatLink;
  controlVectorNode?: animVectorLink;
}
