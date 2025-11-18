export class WaterAreaSettings extends IAreaSettings {
  blurMin?: number;
  blurMax?: number;
  blurExponent?: number;
  depth?: number;
  density?: number;
  lightAbsorptionColor?: HDRColor;
  lightDecayColor?: HDRColor;
  globalWaterMask?: ResourceRef;
  windDir?: CurveDataFloat;
  windSpeed?: CurveDataFloat;
  windScale?: CurveDataFloat;
  amplitude?: CurveDataFloat;
  lambda?: CurveDataFloat;
}
