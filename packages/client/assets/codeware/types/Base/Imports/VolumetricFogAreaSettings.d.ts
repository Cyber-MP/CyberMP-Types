export class VolumetricFogAreaSettings extends IAreaSettings {
  albedo?: CurveDataHDRColor;
  range?: CurveDataFloat;
  fogHeight?: CurveDataFloat;
  fogHeightFalloff?: CurveDataFloat;
  fogHeightMaxCut?: CurveDataFloat;
  density?: CurveDataFloat;
  absorption?: CurveDataFloat;
  ambientScale?: CurveDataFloat;
  localAmbientScale?: CurveDataFloat;
  globalLightScale?: CurveDataFloat;
  globalLightAnisotropy?: CurveDataFloat;
  globalLightAnisotropyBase?: CurveDataFloat;
  globalLightAnisotropyScale?: CurveDataFloat;
  localLightRange?: CurveDataFloat;
  localLightScale?: CurveDataFloat;
  distantAlbedo?: CurveDataHDRColor;
  distantGlobalLightScale?: CurveDataFloat;
  distantGroundIrradiance?: CurveDataFloat;
  distantGroundSaturation?: CurveDataFloat;
  distantSkyIrradiance?: CurveDataFloat;
  distantShadowAmbientDarkening?: CurveDataFloat;
}
