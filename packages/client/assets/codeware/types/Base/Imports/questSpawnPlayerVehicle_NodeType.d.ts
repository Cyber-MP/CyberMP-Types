export class questSpawnPlayerVehicle_NodeType extends questIVehicleManagerNodeType {
  despawn?: boolean;
  positionRef?: questUniversalRef;
  offset?: { x: number; y: number; z: number };
  driveIn?: boolean;
  vehicle?: string;
  vehicleGlobalName?: string;
  despawnAllEnabledVehicles?: boolean;
  retryUntilStubCreated?: boolean;
}
