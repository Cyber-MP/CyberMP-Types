/**
 * Pickup types.
 */
export enum PickupType {
  Clothes = 1,
  Weapon = 2,
  Other = 3,
}

declare global {
  interface MpPickup extends MpEntity {
    readonly model: TweakDBID;
    readonly pickupType: PickupType;

    destroy(): void;
  }

  type CreatePickupOptions = {
    model: TweakDBID;
    type: PickupType;
    position: Vector3;
    yaw?: number;
    dimension?: number;
  };

  interface MpPickups extends MpEntities<MpPickup> {
    create(options: CreatePickupOptions): MpPickup;
  }
}
