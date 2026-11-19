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

  /**
   * The player whose game currently syncs this entity.
   * Assign another player to hand the entity over.
   *
   * The getter never returns `null`. While nobody owns the entity (for example
   * a vehicle you have just created on an empty server), you get a player
   * wrapper whose `id` is `-1` and whose `exist` is `false`. Check one of
   * the two before you use the owner.
   *
   * @example
   * const owner = vehicle.owner;
   * if (owner.exist) {
   *   console.log(`Vehicle ${vehicle.id} is synced by ${owner.nickname}`);
   * }
   */
  owner: MpPlayer;

  /**
   * The first player who ever owned this entity.
   * Like {@link MpEntity.owner}, it is a player wrapper with `id` `-1`
   * while the entity has never had an owner.
   */
  readonly firstOwner: MpPlayer;

  readonly position: Vector3;
  readonly rotation: Rotation;

  /** Yaw angle in degrees */
  readonly yaw: number;

  /**
   * Type of entity (see {@link EntityType}).
   */
  readonly type: TEntityType;

  /**
   * Whether the entity still exists in the world.
   *
   * `destroy()` only takes effect on the next server tick, so this is still
   * truthy right after you call it. Use it as a condition (`if (entity.exist)`)
   * rather than comparing it to `true`: for anything but players the server
   * answers with `1`, not `true`.
   */
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
   * @returns Stored value, or `null` if nothing is stored under this key
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
   * Only `mp.players` checks what kind of entity the ID belongs to. The other
   * pools accept the ID of any existing entity, so `mp.vehicles.exists(pedId)`
   * is truthy. Read `entity.type` when you need to be sure.
   *
   * @param entity - Entity instance or ID
   * @returns True if entity exists
   */
  exists(entity: T | number): boolean;

  /**
   * Retrieves an entity by instance or ID.
   *
   * It does not throw when the entity is missing: you get `undefined`, so
   * check the result before you use it.
   *
   * Every call builds a new wrapper object. Two wrappers of the same entity
   * are not `===`, compare their `id` instead.
   *
   * @param entity - Entity instance or ID
   * @returns Entity instance, or `undefined` if no entity has this ID
   *
   * @example
   * const vehicle = mp.vehicles.at(vehicleId);
   * if (!vehicle) {
   *   return;
   * }
   * console.log(vehicle.position);
   */
  at(entity: T | number): T | undefined;
}
