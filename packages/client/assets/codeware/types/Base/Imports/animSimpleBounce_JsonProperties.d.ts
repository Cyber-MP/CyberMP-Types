export class animSimpleBounce_JsonProperties extends ISerializable {
  multiplier?: number;
  negativeMultiplier?: number;
  smoothStep?: number;
  offset?: number;
  delay?: number;
  startTransform?: animTransformIndex;
  endTransform?: animTransformIndex;
  transformOutputs?: animSimpleBounceTransformOutput[];
  trackOutputs?: animSimpleBounceTrackOutput[];
  outputDriverTrack?: animNamedTrackIndex;
}
