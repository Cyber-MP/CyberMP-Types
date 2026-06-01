import type { EntityType, MpEntities, MpEntity } from './entities';
import type { GameHash, Vector3 } from './shared';

/**
 * @category Entities/Objects
 */
export interface MpObject extends MpEntity<EntityType.GameObject> {
  readonly model: GameHash;

  destroy(): void;
}

/**
 * @category Entities/Objects
 */
export type CreateObjectOptions = {
  model: GameHash;
  position: Vector3;
  yaw?: number;
  dynamic?: boolean;
  dimension?: number;
};

/**
 * @category Entities/Objects
 */
export interface MpObjects extends MpEntities<MpObject> {
  create(options: CreateObjectOptions): MpObject;
  destroy(entity: MpObject | number): void;
  toArray(): MpObject[];
}
