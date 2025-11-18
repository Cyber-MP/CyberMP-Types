export class animAnimNode_SimpleBounce extends animAnimNode_OnePoseInput {
  areChannelsResaved?: boolean;
  outputDriverTrack?: animNamedTrackIndex;
  debug?: boolean;
  startTransform?: animTransformIndex;
  endTransform?: animTransformIndex;
  multiplier?: number;
  negativeMultiplier?: number;
  smoothStep?: number;
  offset?: number;
  delay?: number;
  transformOutputs?: animSimpleBounceTransformOutput[];
  trackOutputs?: animSimpleBounceTrackOutput[];
}
