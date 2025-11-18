export class animAnimNode_AddIkRequest extends animAnimNode_OnePoseInput {
  ikChain?: string;
  targetBone?: animTransformIndex;
  positionOffset?: { x: number; y: number; z: number };
  rotationOffset?: { i: number; j: number; k: number; r: number };
  poleVector?: animPoleVectorDetails;
  weightPosition?: number;
  weightRotation?: number;
  blendTimeIn?: number;
  blendTimeOut?: number;
  priority?: number;
}
