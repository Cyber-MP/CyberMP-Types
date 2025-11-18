export class questVehicleCommandParams extends AICommandParams {
  type?: questVehicleCommandType;
  additionalParamsOnSpline?: questvehicleOnSplineParams;
  additionalParamsFollow?: questvehicleFollowParams;
  additionalParamsToNode?: questvehicleToNodeParams;
  additionalParamsRacing?: questvehicleRacingParams;
  additionalParamsJoinTraffic?: questvehicleJoinTrafficParams;
  additionalParamsPanic?: questvehiclePanicParams;
  additionalParamsChase?: questvehicleChaseParams;
}
