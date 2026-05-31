/**
 * Interface managing cross-resource and synchronized state metadata across the network layer.
 * Allows attaching arbitrary data structures to globals, specific players, the local player, or synchronized network entities.
 */
export interface MpMeta {
  /**
   * Sets a global metadata value accessible across the entire runtime environment.
   * @param key - The unique identifier string for the metadata entry.
   * @param value - The data payload to store (can be any serializable object or primitive).
   * @param sync - Optional flag. If `true`, synchronizes this metadata across the network to all other clients.
   */
  setGlobalMeta(key: string, value: any, sync?: boolean): void;

  /**
   * Retrieves a global metadata value by its key.
   * @template T - The expected type of the returned metadata value.
   * @param key - The unique identifier string of the metadata entry to look up.
   * @returns The stored global metadata value cast to type T, or undefined if it does not exist.
   */
  getGlobalMeta<T = any>(key: string): T;

  /**
   * Assigns a metadata value to a specific remote player using their unique player network ID.
   * @param playerId - The network identification integer of the target player.
   * @param key - The unique identifier string for this player's metadata entry.
   * @param value - The data payload to attach to the player.
   * @param sync - Optional flag. If `true`, syncs this change to all other connected clients over the network.
   */
  setPlayerMeta(
    playerId: number,
    key: string,
    value: any,
    sync?: boolean,
  ): void;

  /**
   * Retrieves a metadata value attached to a specific remote player.
   * @template T - The expected type of the returned metadata value.
   * @param playerId - The network identification integer of the target player.
   * @param key - The unique identifier string of the player's metadata entry.
   * @returns The stored metadata value cast to type T, or undefined if it does not exist.
   */
  getPlayerMeta<T = any>(playerId: number, key: string): T;

  /**
   * Sets a metadata value restricted or assigned specifically to the local player instance.
   * @param key - The unique identifier string for the local player's metadata entry.
   * @param value - The data payload to store.
   * @param sync - Optional flag. If `true`, relays this local metadata state out to the server and other clients.
   */
  setLocalPlayerMeta(key: string, value: any, sync?: boolean): void;

  /**
   * Retrieves a metadata value attached specifically to the local player instance.
   * @template T - The expected type of the returned metadata value.
   * @param key - The unique identifier string of the local player's metadata entry.
   * @returns The stored metadata value cast to type T, or undefined if it does not exist.
   */
  getLocalPlayerMeta<T = any>(key: string): T;

  /**
   * Attaches a metadata state payload to any synchronized network entity (e.g., vehicles, props, peds) using its network ID.
   * @param netId - The network-assigned unique identifier tracking the target entity.
   * @param key - The unique identifier string for the entity's metadata entry.
   * @param value - The data payload to attach to the entity.
   * @param sync - Optional flag. If `true`, synchronizes this entity metadata property to all clients tracking this object.
   */
  setEntityMeta(netId: number, key: string, value: any, sync?: boolean): void;

  /**
   * Retrieves a metadata value associated with a synchronized network entity.
   * @template T - The expected type of the returned metadata value.
   * @param netId - The network-assigned unique identifier tracking the target entity.
   * @param key - The unique identifier string of the entity's metadata entry.
   * @returns The stored metadata value cast to type T, or undefined if it does not exist.
   */
  getEntityMeta<T = any>(netId: number, key: string): T;
}
