export class questToggleDoor_NodeType extends questIVehicleManagerNodeType {
  vehicleRef?: EntityReference;
  doorAction?: EQuestVehicleDoorState;
  door?: EVehicleDoor;
  forceScene?: boolean;
  toOpen?: boolean;
  doorID?: string;
}
