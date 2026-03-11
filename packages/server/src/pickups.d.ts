import type { MpEntities, MpEntity } from './entities';
import type { TweakDBID, Vector3 } from './shared';

export enum PickupType {
  Clothes = 1,
  Weapon = 2,
  Other = 3,
}

export interface MpPickup extends MpEntity {
  readonly model: TweakDBID;
  readonly pickupType: PickupType;

  destroy(): void;
}

export type CreatePickupOptions = {
  model: TweakDBID;
  type: PickupType;
  position: Vector3;
  yaw?: number;
  dimension?: number;
};

export interface MpPickups extends MpEntities<MpPickup> {
  create(options: CreatePickupOptions): MpPickup;
}
