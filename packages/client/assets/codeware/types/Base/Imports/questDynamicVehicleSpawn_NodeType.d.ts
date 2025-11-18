export class questDynamicVehicleSpawn_NodeType extends questIDynamicSpawnSystemType {
  VehicleData?: TweakDBID[];
  waveTag?: string;
  spawnDirectionPreference?: questSpawnDirectionPreference;
  distanceRange?: { x: number; y: number };
}
