export class animAnimNode_AimConstraint_ObjectUp extends animAnimNode_OnePoseInput {
  targetTransform?: animTransformIndex;
  upTransform?: animTransformIndex;
  transformIndex?: animTransformIndex;
  forwardAxisLS?: { x: number; y: number; z: number };
  upAxisLS?: { x: number; y: number; z: number };
  weightMode?: animConstraintWeightMode;
  weight?: number;
  weightFloatTrack?: animNamedTrackIndex;
}
