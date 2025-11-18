export class RainAreaSettings extends IAreaSettings {
  numParticles?: number;
  radius?: number;
  heightRange?: number;
  globalLightResponse?: number;
  tiling?: CurveDataFloat;
  porosityThresholdStart?: number;
  porosityThresholdEnd?: number;
  glossinessFactor?: number;
  baseColorFactor?: number;
  moistureAccumulationSpeed?: number;
  puddlesAccumulationSpeed?: number;
  moistureEvaporationSpeed?: number;
  puddlesEvaporationSpeed?: number;
  rainIntensity?: CurveDataFloat;
  rainOverride?: CurveDataFloat;
  rainMoistureOverride?: CurveDataFloat;
  rainPuddlesOverride?: CurveDataFloat;
  waterRainIntensity?: number;
  rainleaksMask?: ResourceRef;
  raindropsMask?: ResourceRef;
  rainRipplesMask?: ResourceRef;
}
