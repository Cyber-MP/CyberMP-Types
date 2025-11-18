export interface LookAtPartsDependency {
  masterPart?: string;
  slavePart?: string;
  angle?: number;
  speedToTargetFactor?: number;
  speedToTargetByAngleCurve?: CurveDataFloat;
  verticalPullSpeedFactor?: number;
  verticalPullSpeedByAngleCurve?: CurveDataFloat;
  horizontalPullSpeedFactor?: number;
  horizontalPullSpeedByAngleCurve?: CurveDataFloat;
  pullScaleBySquareSizeFactor?: number;
  pullScaleBySquareSizeCurve?: CurveDataFloat;
  innerSquareScale?: number;
}
