export class animAnimationBufferCompressed extends animIAnimationBuffer {
  duration?: number;
  numFrames?: number;
  numExtraJoints?: number;
  numExtraTracks?: number;
  numJoints?: number;
  numTracks?: number;
  numAnimKeys?: number;
  numAnimKeysRaw?: number;
  numConstAnimKeys?: number;
  numTrackKeys?: number;
  numConstTrackKeys?: number;
  isScaleConstant?: boolean;
  hasRawRotations?: boolean;
  fallbackFrameIndices?: number[];
  dataAddress?: animAnimDataAddress;
  extraDataNames?: string[];
}
