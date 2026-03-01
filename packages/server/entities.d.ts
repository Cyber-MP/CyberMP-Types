/// <reference path="./shared.d.ts" />

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

    getMeta<T = any>(key: string): T;
    setMeta(key: string, value: any, sync?: boolean): void;
  }

  interface MpEntities<T extends MpEntity = MpEntity> extends Array<T> {
    exists(entity: T | number): boolean;

    at(entity: T | number): T;
  }
}
