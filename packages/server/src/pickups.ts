import type { EntityType, MpEntities, MpEntity } from './entities';
import type { TweakDBID, Vector3 } from './shared';

/**
 * @category Entities/Pickups
 */
export enum PickupType {
  Clothes = 1,
  Weapon = 2,
  Other = 3,
}

/**
 * @category Entities/Pickups
 */
export interface MpPickup extends MpEntity<EntityType.Pickup> {
  readonly model: TweakDBID;
  readonly pickupType: PickupType;

  destroy(): void;
}

/**
 * @category Entities/Pickups
 */
export type CreatePickupOptions = {
  model: TweakDBID;
  type: PickupType;
  position: Vector3;
  yaw?: number;
  dimension?: number;
};

/**
 * @category Entities/Pickups
 */
export interface MpPickups extends MpEntities<MpPickup> {
  create(options: CreatePickupOptions): MpPickup;
}
