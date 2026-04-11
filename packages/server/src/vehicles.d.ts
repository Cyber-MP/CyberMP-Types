import type { MpEntities, MpEntity } from './entities';
import type { MpPlayer } from './players';
import type { CName, TweakDBID, Vector3 } from './shared';

/**
 * @category Enums
 */
export enum VehicleSeat {
  Driver = 0,
  Passenger = 1,
  RearLeft = 2,
  RearRight = 3,
}

export interface MpVehicle extends MpEntity {
  readonly model: TweakDBID;
  readonly appearance: CName;
  readonly health: number;
  readonly velocity: Vector3;
  readonly angularVelocity: Vector3;

  getPlayerInSeat(seat: VehicleSeat): MpPlayer | null;
  getLastPlayerInSeat(seat: VehicleSeat): MpPlayer | null;

  destroy(): void;
}

type CreateVehicleOptions = {
  model: TweakDBID;
  appearance: CName;
  position: Vector3;
  yaw?: number;
  health?: number;
  dimension?: number;
};

export interface MpVehicles extends MpEntities<MpVehicle> {
  create(options: CreateVehicleOptions): MpVehicle;
  destroy(vehicle: MpVehicle | number): void;
  toArray(): MpVehicle[];
}
