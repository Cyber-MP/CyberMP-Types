export class animAnimNode_OrientConstraint extends animAnimNode_OnePoseInput {
  areSourceChannelsResaved?: boolean;
  inputTransforms?: animAnimNodeSourceChannel_WeightedQuat[];
  preprocessedWeights?: number[];
  inputWeightedTransforms?: animAnimNode_OrientConstraint_WeightedTransform[];
  transformIndex?: animTransformIndex;
  weightMode?: animConstraintWeightMode;
  weight?: number;
  weightFloatTrack?: animNamedTrackIndex;
}
