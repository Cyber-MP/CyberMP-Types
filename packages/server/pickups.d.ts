/**
 * Pickup types.
 */
declare const enum PickupType {
  Clothes = 1,
  Weapon = 2,
  Other = 3,
}

interface MpPickup extends MpEntity {
  readonly pickupType: PickupType;
}

type CreatePickupOptions = {
  model: GameHash;
  type: PickupType;
  position: Vector3;
  yaw?: number;
  dimension?: number;
};

interface MpPickups extends MpEntities<MpPickup> {
  create(
    model: GameHash,
    type: PickupType,
    x: number,
    y: number,
    z: number,
    yaw: number,
  ): MpPickup;
  create(options: CreatePickupOptions): MpPickup;
}
