export class questvehicleToNodeParams extends questVehicleSpecificCommandParams {
  stopAtEnd?: boolean;
  nodeRef?: string;
  isPlayer?: boolean;
  useTraffic?: boolean;
  speedInTraffic?: number;
  forceGreenLights?: boolean;
  portals?: vehiclePortalsList;
  trafficTryNeighborsForStart?: boolean;
  trafficTryNeighborsForEnd?: boolean;
  ignoreNoAIDrivingLanes?: boolean;
}
