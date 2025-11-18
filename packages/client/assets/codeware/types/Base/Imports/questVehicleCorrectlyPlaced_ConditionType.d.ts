export class questVehicleCorrectlyPlaced_ConditionType extends questIVehicleConditionType {
  vehicleRef?: EntityReference;
  timeInterval?: number;
  checkIsUpsideDown?: boolean;
  checkIsOnTheSide?: boolean;
  checkAreAllWheelsOnGround?: boolean;
  inverted?: boolean;
}
