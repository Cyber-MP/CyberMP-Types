export class animAnimNode_PointConstraint extends animAnimNode_OnePoseInput {
  areSourceChannelsResaved?: boolean;
  inputTransforms?: animAnimNodeSourceChannel_WeightedVector[];
  preprocessedWeights?: number[];
  inputWeightedTransforms?: animAnimNode_PointConstraint_WeightedTransform[];
  transformIndex?: animTransformIndex;
  weightMode?: animConstraintWeightMode;
  weight?: number;
  weightFloatTrack?: animNamedTrackIndex;
}
