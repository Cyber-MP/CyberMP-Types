export class animAnimationBufferSimd extends animIAnimationBuffer {
  duration?: number;
  numFrames?: number;
  numExtraJoints?: number;
  numExtraTracks?: number;
  numJoints?: number;
  numTracks?: number;
  numTranslationsToCopy?: number;
  numTranslationsToEvalAlignedToSimd?: number;
  quantizationBits?: number;
  isScaleConstant?: boolean;
  isTrackConstant?: boolean;
  dataAddress?: animAnimDataAddress;
  fallbackFrameIndices?: number[];
  extraDataNames?: string[];
}
