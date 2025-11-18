export class questMoveOnSplineAndKeepDistance_NodeType extends questIVehicleManagerNodeType {
  vehicleRef?: EntityReference;
  keepDistanceFromRef?: EntityReference;
  splineRef?: string;
  distance?: number;
  blendTime?: number;
  minSpeed?: number;
  reduceSpeedOnTurns?: boolean;
}
