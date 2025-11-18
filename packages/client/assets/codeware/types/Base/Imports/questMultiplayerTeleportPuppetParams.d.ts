export interface questMultiplayerTeleportPuppetParams {
  teleportAllPlayers?: boolean;
  spawnPointTag?: string;
  destinationRef?: EntityReference;
  destinationOffset?: { x: number; y: number; z: number };
  areaNodeTriggerRef?: EntityReference;
}
