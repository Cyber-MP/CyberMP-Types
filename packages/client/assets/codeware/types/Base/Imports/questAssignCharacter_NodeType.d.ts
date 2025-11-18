export class questAssignCharacter_NodeType extends questIVehicleManagerNodeType {
  characterRef?: EntityReference;
  vehicleRef?: EntityReference;
  isPlayer?: boolean;
  assign?: boolean;
  slotName?: string;
  isInstant?: boolean;
  clearAssignedVehicleIdWhenUnmounting?: boolean;
  entryAnimName?: string;
  entrySlotName?: string;
}
