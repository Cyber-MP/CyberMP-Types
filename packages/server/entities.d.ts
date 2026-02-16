export enum EntityType {
  Player = 1,
  Vehicle = 2,
  Object = 3,
}

declare global {
  interface MpEntity {
    readonly id: number;
    readonly owner: MpPlayer;
    readonly firstOwner: MpPlayer;
    readonly position: Vector3;
    readonly rotation: Rotation;
    readonly yaw: number;
    readonly type: EntityType;
    readonly exist: boolean;

    dimension: number;
    streamingRadius: number;
  }

  interface MpEntities<T extends MpEntity = MpEntity> extends Array<T> {
    /**
     * Checks if an entity exists in the game world.
     * @param entity Entity ID.
     * @returns True if entity exists, otherwise false.
     */
    exists(entity: T | number): boolean;

    at(entity: T | number): T;
  }
}
