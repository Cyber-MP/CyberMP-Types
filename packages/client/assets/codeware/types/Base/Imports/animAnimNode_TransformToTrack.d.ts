export class animAnimNode_TransformToTrack extends animAnimNode_OnePoseInput {
  floatTrack?: number;
  floatTrackIndex?: animNamedTrackIndex;
  outputTransform?: number;
  transformIndex?: animTransformIndex;
  channel?: animTransformChannel;
  mulFactor?: number;
  weight?: number;
  weightNode?: animFloatLink;
  mulFactorNode?: animFloatLink;
}
