export class WorldStateSystem extends IGameSystem {
  IsReady(): boolean;
  GetStreamingWorld(): worldStreamingWorld;
  GetCommunity(community: string): CommunityWrapper;
  ActivateCommunity(community: string, entry?: string): void;
  DeactivateCommunity(community: string, entry?: string): void;
  ResetCommunity(community: string): void;
  SetCommunityPhase(community: string, entry: string, phase: string): void;
  GetPopulationSpawner(spawner: string): PopulationSpawnerWrapper;
  ActivatePopulationSpawner(spawner: string): void;
  DeactivatePopulationSpawner(spawner: string): void;
  ResetPopulationSpawner(spawner: string): void;
  ToggleNode(node: string, state: boolean): void;
  ToggleVariant(ref: string, name: string, state: boolean): void;
  TogglePrefab(node: string, state: boolean): void;
  TogglePrefabVariant(ref: string, name: string, state: boolean): void;
}

export function GetWorldStateSystem(): WorldStateSystem;
