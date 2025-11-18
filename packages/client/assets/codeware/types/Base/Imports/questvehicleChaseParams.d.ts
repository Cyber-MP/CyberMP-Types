export class questvehicleChaseParams extends questVehicleSpecificCommandParams {
  targetEntRef?: EntityReference;
  isPlayer?: boolean;
  distanceMin?: number;
  distanceMax?: number;
  forceStartSpeed?: number;
  aggressiveRammingEnabled?: boolean;
  ignoreChaseVehiclesLimit?: boolean;
  boostDrivingStats?: boolean;
}
