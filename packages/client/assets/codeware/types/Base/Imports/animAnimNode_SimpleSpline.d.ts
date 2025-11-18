export class animAnimNode_SimpleSpline extends animAnimNode_OnePoseInput {
  areSourceChannelsResaved?: boolean;
  startTransform?: animTransformIndex;
  middleTransform?: animTransformIndex;
  endTransform?: animTransformIndex;
  constrainedTransform?: animTransformIndex;
  progressMode?: animConstraintWeightMode;
  defaultProgress?: number;
  progressTrack?: animNamedTrackIndex;
}
