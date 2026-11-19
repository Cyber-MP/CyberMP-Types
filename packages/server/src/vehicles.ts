import type { EntityType, MpEntities, MpEntity } from './entities';
import type { MpPlayer } from './players';
import type { CName, GameHash, Vector3 } from './shared';

/**
 * @category Entities/Vehicles
 */
export enum VehicleSeat {
  Driver = 0,
  Passenger = 1,
  RearLeft = 2,
  RearRight = 3,
}

/**
 * @category Entities/Vehicles
 */
export interface MpVehicle extends MpEntity<EntityType.Vehicle> {
  readonly model: GameHash;
  /**
   * Hash of the appearance the vehicle was created with.
   *
   * Careful: this is a 64-bit hash, but the getter hands it back as a plain
   * `number`, so the value is rounded (and can even come out negative). It
   * never equals the `bigint` you got from `mp.hashes.cname()` and passed to
   * `create()`, and you cannot convert it back. If you need the hash later,
   * keep the value you created the entity with.
   */
  readonly appearance: CName;
  readonly health: number;
  readonly velocity: Vector3;
  readonly angularVelocity: Vector3;

  seats: {
    readonly driver: MpPlayer | null;
    readonly passenger: MpPlayer | null;
    readonly rearLeft: MpPlayer | null;
    readonly rearRight: MpPlayer | null;
  };

  lastSeats: {
    readonly driver: MpPlayer | null;
    readonly passenger: MpPlayer | null;
    readonly rearLeft: MpPlayer | null;
    readonly rearRight: MpPlayer | null;
  };

  getPlayerInSeat(seat: VehicleSeat): MpPlayer | null;
  getLastPlayerInSeat(seat: VehicleSeat): MpPlayer | null;

  destroy(): void;
}

/**
 * @category Entities/Vehicles
 */
export type CreateVehicleOptions = {
  model: GameHash;
  appearance: CName;
  position: Vector3;
  yaw?: number;
  health?: number;
  dimension?: number;
};

/**
 * @category Entities/Vehicles
 */
export interface MpVehicles extends MpEntities<MpVehicle> {
  create(options: CreateVehicleOptions): MpVehicle;
  destroy(vehicle: MpVehicle | number): void;
  toArray(): MpVehicle[];
}
