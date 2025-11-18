export class animAnimNode_TransformRotator extends animAnimNode_OnePoseInput {
  transform?: animTransformIndex;
  axis?: { x: number; y: number; z: number };
  valueScale?: number;
  clamp?: boolean;
  angleMin?: number;
  angleMax?: number;
  angleValueNode?: animFloatLink;
  angleSpeedNode?: animFloatLink;
}
