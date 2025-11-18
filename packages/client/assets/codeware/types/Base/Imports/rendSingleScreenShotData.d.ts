export class rendSingleScreenShotData extends ISerializable {
  mode?: rendScreenshotMode;
  outputPath?: AbsolutePathSerializable;
  resolution?: renddimEPreset;
  resolutionMultiplier?: rendResolutionMultiplier;
  emmModes?: EEnvManagerModifier[];
  forceLOD0?: boolean;
  saveFormat?: ESaveFormat;
}
