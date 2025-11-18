export class questvehicleFollowParams extends questVehicleSpecificCommandParams {
  targetEntRef?: EntityReference;
  distanceMin?: number;
  distanceMax?: number;
  isPlayer?: boolean;
  stopWhenTargetReached?: boolean;
  useTraffic?: boolean;
  trafficTryNeighborsForStart?: boolean;
  trafficTryNeighborsForEnd?: boolean;
}
