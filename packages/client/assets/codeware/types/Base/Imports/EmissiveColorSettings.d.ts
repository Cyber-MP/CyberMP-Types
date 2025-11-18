export class EmissiveColorSettings extends IAreaSettings {
  tint?: CurveDataHDRColor;
  saturation?: CurveDataFloat;
  brigtness?: CurveDataFloat;
  exposure?: CurveDataVector2;
  cameraLuminance?: CurveDataVector2;
  evBlend?: CurveDataFloat;
  exposureIBL?: CurveDataFloat;
  luminanceIBL?: CurveDataFloat;
  curveRampIBL?: number;
  exposureScale?: CurveDataFloat;
}
