export interface rendScreenshotBatchData {
  batchPositionsPath?: AbsolutePathSerializable;
  delayTime?: number;
  numberOfCoordinatesToDump?: number;
  mergeScreenshots?: boolean;
  streamingObserverMode?: rendEStreamingObserverMode;
}
