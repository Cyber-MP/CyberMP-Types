import type { MpPlayer } from './players';
import type { Rotation, Vector3 } from './shared';

export enum EntityType {
  Player = 1,
  Vehicle = 2,
  Object = 3,
}

export interface MpEntity {
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

export interface MpEntities<T extends MpEntity = MpEntity> {
  exists(entity: T | number): boolean;

  at(entity: T | number): T;
}
