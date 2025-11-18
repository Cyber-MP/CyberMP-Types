export class questvehicleOnSplineParams extends questVehicleSpecificCommandParams {
  splineRef?: string;
  reverseSpline?: boolean;
  backwards?: boolean;
  closest?: boolean;
  forcedStartSpeed?: number;
  stopAtEnd?: boolean;
  keepDistance?: boolean;
  keepDistanceParam?: questParamKeepDistance;
  rubberBanding?: boolean;
  rubberBandingParam?: questParamRubberbanding;
  audioCurvesParam?: vehicleAudioCurvesParam;
}
