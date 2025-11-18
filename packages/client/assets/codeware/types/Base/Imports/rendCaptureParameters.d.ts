export interface rendCaptureParameters {
  enable?: boolean;
  mode?: rendScreenshotMode;
  videoRecordingMode?: boolean;
  audioRecordingMode?: boolean;
  emmModes?: EEnvManagerModifier[];
  initialFrameNumber?: number;
  outputDirectoryIndex?: number;
  outputDirectoryName?: string;
  outputDirectoryNameSuffix?: string;
  recordingFPS?: number;
  customResolution?: Point;
  resolutionMultiplier?: rendResolutionMultiplier;
  outputPath?: AbsolutePathSerializable;
  fovMultiplier?: number;
  captureContextType?: rendCaptureContextType;
  saveFormat?: ESaveFormat;
}
