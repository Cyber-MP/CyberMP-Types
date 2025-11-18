export class animCAnimationBufferBitwiseCompressed extends animIAnimationBuffer {
  version?: number;
  bones?: animSAnimationBufferBitwiseCompressedBoneTrack[];
  tracks?: animSAnimationBufferBitwiseCompressedData[];
  data?: number[];
  fallbackData?: number[];
  orientationCompressionMethod?: SAnimationBufferOrientationCompressionMethod;
  duration?: number;
  numFrames?: number;
  dt?: number;
  streamingOption?: SAnimationBufferStreamingOption;
  nonStreamableBones?: number;
  extraDataNames?: string[];
  numExtraBones?: number;
}
