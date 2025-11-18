export class animAnimNode_AimConstraint extends animAnimNode_OnePoseInput {
  areSourceChannelsResaved?: boolean;
  targetTransforms?: animAnimNodeSourceChannel_WeightedVector[];
  targetTransform?: animTransformIndex;
  upTransform?: animIAnimNodeSourceChannel_Vector;
  transformIndex?: animTransformIndex;
  forwardAxisLS?: { x: number; y: number; z: number };
  upAxisLS?: { x: number; y: number; z: number };
  weightMode?: animConstraintWeightMode;
  weight?: number;
  weightFloatTrack?: animNamedTrackIndex;
}
