export class animAnimNode_MultipleParentConstraint extends animAnimNode_OnePoseInput {
  parentsTransform?: animIAnimNodeSourceChannel_QsTransform[];
  parentsWeight?: animIAnimNodeSourceChannel_Float[];
  areSourceChannelsResaved?: boolean;
  parentsTransforms?: animAnimNode_MultipleParentConstraint_ParentInfo[];
  transformIndex?: animTransformIndex;
  interpolationType?: animEInterpolationType;
  weightMode?: animConstraintWeightMode;
  weight?: number;
  weightFloatTrack?: animNamedTrackIndex;
}
