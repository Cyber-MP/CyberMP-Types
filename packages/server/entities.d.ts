declare const enum EntityType {
  Player = 1,
  Vehicle = 2,
  Object = 3,
}

interface MpEntity {
  // These would be not just properties but getters
  readonly id: number;
  readonly networkId: number;
  readonly owner: MpEntity;
  readonly firstOwner: MpEntity;
  readonly position: Vector3;
  readonly rotation: Vector3;
  readonly yaw: number;
  readonly type: EntityType;

  // These would be getters AND setters
  dimension: number;
  streamingRadius: number;

  exists(): boolean;
  destroy(): void;
}

interface MpEntities<T extends MpEntity = MpEntity> extends Array<T> {
  /**
   * Checks if an entity exists in the game world.
   * @param entity Entity ID.
   * @returns True if entity exists, otherwise false.
   */
  exists(entity: T | number): boolean;

  /**
   * Deletes an entity from the world.
   * @param entity The entity to delete.
   */
  destroy(entity: T | number): void;

  setStreamingRadius(entity: T | number, radius: number): void;

  getByNetId(netId: number): T | undefined;
  getById(entityId: number): T | undefined;
}
