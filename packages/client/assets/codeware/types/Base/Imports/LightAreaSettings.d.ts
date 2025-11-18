export class LightAreaSettings extends IAreaSettings {
  latitude?: CurveDataFloat;
  season?: ETimeOfYearSeason;
  sunRotationOffset?: CurveDataFloat;
  sunColor?: CurveDataHDRColor;
  sunSize?: CurveDataFloat;
  moonRotationOffset?: CurveDataFloat;
  moonColor?: CurveDataHDRColor;
  moonSize?: CurveDataFloat;
  specularTint?: CurveDataHDRColor;
}
