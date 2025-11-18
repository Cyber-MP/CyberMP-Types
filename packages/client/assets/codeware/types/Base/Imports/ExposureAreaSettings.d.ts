export class ExposureAreaSettings extends IAreaSettings {
  exposureAdaptationSpeedUp?: CurveDataFloat;
  exposureAdaptationSpeedDown?: CurveDataFloat;
  exposurePercentageThresholdLow?: CurveDataFloat;
  exposurePercentageThresholdHigh?: CurveDataFloat;
  exposureCompensation?: CurveDataFloat;
  exposureSkyImpact?: CurveDataFloat;
  exposureMin?: CurveDataFloat;
  exposureMax?: CurveDataFloat;
  exposureCenterImportance?: CurveDataFloat;
  cameraVelocityFaloff?: number;
  exposureCompensationOffset?: number;
}
