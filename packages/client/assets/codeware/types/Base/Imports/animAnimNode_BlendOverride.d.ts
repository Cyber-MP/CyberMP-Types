export class animAnimNode_BlendOverride extends animAnimNode_Base {
  inputNode?: animPoseLink;
  overrideInputNode?: animPoseLink;
  weightNode?: animFloatLink;
  bones?: animOverrideBlendBoneInfo[];
  blendAllTracks?: boolean;
  blendTrackMode?: animEBlendTracksMode;
  tracks?: animOverrideBlendTrackInfo[];
  getDeltaMotionFromOverride?: boolean;
  timeWarpingEnabled?: boolean;
  syncMethod?: animISyncMethod;
  blendMethod?: animIPoseBlendMethod;
  postProcess?: animIAnimNode_PostProcess;
}
