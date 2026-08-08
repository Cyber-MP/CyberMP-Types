import type { MpObject } from './objects';
import type { MpPed } from './peds';
import type { MpPickup } from './pickups';
import type { MpPlayer } from './players';
import type { Rotation, Vector3 } from './shared';
import type { MpVehicle } from './vehicles';

/**
 * Types of entities available in the multiplayer environment.
 * @category Entities
 */
export enum EntityType {
  Player = 1,
  Vehicle = 2,
  Object = 3,
  Ped = 4,
  Pickup = 5,
  GameObject = 6,
}

/**
 * @category Entities
 */
export type MpAnyEntity =
  | MpPlayer
  | MpVehicle
  | MpObject
  | MpPed
  | MpPickup
  | MpEntity<EntityType.GameObject>;

/**
 * Base interface representing any in-game entity.
 * @category Entities
 */
export interface MpEntity<TEntityType extends EntityType = EntityType> {
  /** Unique entity identifier */
  readonly id: number;

  /** Current owner of the entity sync */
  owner: MpPlayer;

  readonly position: Vector3;
  readonly rotation: Rotation;

  /** Yaw angle in degrees */
  readonly yaw: number;

  /**
   * Type of entity (see {@link EntityType}).
   */
  readonly type: TEntityType;

  /** Whether the entity still exists in the world */
  readonly exist: boolean;

  /** Virtual world dimension this entity belongs to */
  dimension: number;

  /** Distance at which this entity streams in/out */
  streamingRadius: number;

  /**
   * Retrieves metadata stored on this entity.
   *
   * @typeParam T - Expected return type
   * @param key - Metadata key
   * @returns Stored value or undefined if not set
   *
   * @example
   * const health = entity.getMeta<number>("health");
   */
  getMeta<T = any>(key: string): T;

  /**
   * Sets metadata on this entity.
   *
   * @param key - Metadata key
   * @param value - Value to store
   * @param sync - Whether to synchronize with clients immediately
   */
  setMeta(key: string, value: any, sync?: boolean): void;
}

/**
 * Collection wrapper for managing multiple entities.
 * @category Entities
 *
 * @typeParam T - Specific entity type extending MpEntity
 */
export interface MpEntities<T extends MpEntity = MpEntity> {
  /**
   * Checks if an entity exists.
   *
   * @param entity - Entity instance or ID
   * @returns True if entity exists
   */
  exists(entity: T | number): boolean;

  /**
   * Retrieves an entity by instance or ID.
   *
   * @param entity - Entity instance or ID
   * @returns Entity instance
   *
   * @throws If entity does not exist
   */
  at(entity: T | number): T;
}
