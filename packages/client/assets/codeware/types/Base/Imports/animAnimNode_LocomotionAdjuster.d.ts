export class animAnimNode_LocomotionAdjuster extends animAnimNode_OnePoseInput {
  targetPosition?: animVectorLink;
  targetDirection?: animVectorLink;
  initialForwardVector?: { x: number; y: number; z: number; w: number };
  blendSpeedPos?: number;
  blendSpeedPosMin?: number;
  blendSpeedRot?: number;
  maxDistance?: number;
}
