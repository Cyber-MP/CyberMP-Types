/**
 * Provides networking and entity synchronization utilities
 */
export interface MpNetwork {
  /**
   * Returns the endpoint address configuration tracking string of the current server session.
   * @returns Endpoint routing connection destination details string (e.g., `"127.0.0.1:4430"`).
   */
  getServerAddress(): string;

  /**
   * Returns an array of game engine handling entities currently within the local player's streaming radius.
   * @param objName - The engine pool target class filter type to look up.
   * @returns An array containing the local runtime engine IDs matching the target pool.
   */
  getStreamedPool(
    objName: 'CVehicle' | 'CPed' | 'CPickup' | 'CObject',
  ): number[];

  /**
   * Gets an array containing all active remote network players currently streaming inside the local user's zone.
   * @returns An array of native game engine entity IDs.
   */
  getStreamedPlayers(): number[];

  /**
   * Resolves a network sync ID into its corresponding local native game engine entity reference handle for a vehicle.
   * @param networkId - The unique synchronization network ID assigned by the server host.
   * @returns The corresponding local native game engine vehicle handle ID.
   */
  getVehicleGameId(networkId: number): number;

  /**
   * Translates a native vehicle game handle into its global shared replication network sync ID.
   * @param gameId - The local native game engine entity instance handle.
   * @returns The synchronized network ID assigned to that vehicle.
   */
  getVehicleId(gameId: number): number;

  /**
   * Translates a native pedestrian/NPC handle into its global shared replication network sync ID.
   * @param gameId - The local native game engine entity instance handle.
   * @returns The synchronized network ID assigned to that pedestrian.
   */
  getPedId(gameId: number): number;

  /**
   * Resolves a network sync ID into its corresponding local native game engine entity reference handle for a pedestrian.
   * @param networkId - The unique synchronization network ID assigned by the server host.
   * @returns The corresponding local native game engine pedestrian handle ID.
   */
  getPedGameId(networkId: number): number;

  /**
   * Resolves a network sync ID into its corresponding local native game engine entity reference handle for a static object.
   * @param networkId - The unique synchronization network ID assigned by the server host.
   * @returns The corresponding local native game engine object handle ID.
   */
  getObjectGameId(networkId: number): number;

  /**
   * Translates a native object or entity prop handle into its global shared replication network sync ID.
   * @param gameId - The local native game engine entity instance handle.
   * @returns The synchronized network ID assigned to that object.
   */
  getObjectId(gameId: number): number;

  /**
   * Resolves a network sync ID into its corresponding local native game engine entity reference handle for a player.
   * @param networkId - The unique synchronization network ID assigned by the server host.
   * @returns The corresponding local native game engine player handle ID.
   */
  getPlayerGameId(networkId: number): number;

  /**
   * Translates a native player character entity handle into its global shared replication network sync ID.
   * @param gameId - The local native game engine entity instance handle.
   * @returns The synchronized network ID assigned to that player.
   */
  getPlayerId(gameId: number): number;
}
