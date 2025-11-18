export class animAnimNode_AimConstraint_ObjectRotationUp extends animAnimNode_OnePoseInput {
  targetTransform?: animTransformIndex;
  upTransform?: animTransformIndex;
  upTransformVector?: { x: number; y: number; z: number };
  transformIndex?: animTransformIndex;
  forwardAxisLS?: { x: number; y: number; z: number };
  upAxisLS?: { x: number; y: number; z: number };
  weightMode?: animConstraintWeightMode;
  weight?: number;
  weightFloatTrack?: animNamedTrackIndex;
}
