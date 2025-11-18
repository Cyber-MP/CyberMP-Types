export class GlobalIlluminationSettings extends IAreaSettings {
  multiBouceScale?: CurveDataFloat;
  multiBouceSaturation?: CurveDataFloat;
  emissiveScale?: CurveDataFloat;
  diffuseScale?: CurveDataFloat;
  localLightsScale?: CurveDataFloat;
  lightScaleCompenensation?: CurveDataFloat;
  reflectionCompensation?: CurveDataFloat;
  ambientBase?: CurveDataHDRColor;
  rayTracedSkyRadianceScale?: CurveDataFloat;
}
