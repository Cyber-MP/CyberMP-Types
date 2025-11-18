export class animAnimNode_BlendAdditive extends animAnimNode_Base {
  biasValue?: number;
  scaleValue?: number;
  additiveType?: animEAnimGraphAdditiveType;
  timeWarpingEnabled?: boolean;
  blendTracks?: animEBlendTracksMode;
  syncMethod?: animISyncMethod;
  inputNode?: animPoseLink;
  addedInputNode?: animPoseLink;
  weightNode?: animFloatLink;
  postProcess?: animIAnimNode_PostProcess;
  weightPreviousFrameFloatTrack?: animNamedTrackIndex;
  weightPreviousFrameFloatTrackDefaultValue?: number;
  maskName?: string;
}
