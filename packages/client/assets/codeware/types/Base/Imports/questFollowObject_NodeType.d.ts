export class questFollowObject_NodeType extends questIVehicleManagerNodeType {
  vehicleRef?: EntityReference;
  followObjectRef?: EntityReference;
  offset?: { x: number; y: number; z: number };
  positionLerpSpeed?: number;
  rotationLerpSpeed?: number;
}
