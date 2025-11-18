export class DistantFogAreaSettings extends IAreaSettings {
  range?: CurveDataFloat;
  albedoNear?: CurveDataHDRColor;
  albedoFar?: CurveDataHDRColor;
  nearDistance?: CurveDataFloat;
  farDistance?: CurveDataFloat;
  density?: CurveDataFloat;
  height?: CurveDataFloat;
  heightFallof?: CurveDataFloat;
  densitySecond?: CurveDataFloat;
  heightSecond?: CurveDataFloat;
  heightFallofSecond?: CurveDataFloat;
  simpleColor?: CurveDataHDRColor;
  simpleDensity?: CurveDataFloat;
  envProbeColor?: CurveDataHDRColor;
  envProbeDensity?: CurveDataFloat;
  skyAltitudeBegin?: CurveDataFloat;
  skyAltitudeEnd?: CurveDataFloat;
  skyOpacity?: CurveDataFloat;
}
