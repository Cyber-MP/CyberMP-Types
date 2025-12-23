declare const enum VehicleSeat {
  Driver = 0,
  Passenger = 1,
  RearLeft = 2,
  RearRight = 3,
}

interface MpVehicle extends MpEntity {
  readonly model: GameHash;
  readonly appearance: string;
  readonly health: number;
  readonly velocity: Vector3;
  readonly angularVelocity: Vector3;

  getPlayerInSeat(seat: VehicleSeat): MpPlayer | null;
  getLastPlayerInSeat(seat: VehicleSeat): MpPlayer | null;
}

type CreateVehicleOptions = {
  model: GameHash;
  appearance: GameHash;
  position: Vector3;
  yaw?: number;
  health?: number;
  dimension?: number;
};

interface MpVehicles extends MpEntities<MpVehicle> {
  create(
    modelHash: bigint | number,
    appearanceHash: number | bigint,
    x: number,
    y: number,
    z: number,
    health: number,
    yaw: number,
  ): MpVehicle;
  create(options: CreateVehicleOptions): MpVehicle;
}
