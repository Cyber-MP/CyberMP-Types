import type { EntityType, MpEntities, MpEntity } from './entities';
import type { GameHash, Vector3 } from './shared';

/**
 * @category Entities/Objects
 */
export interface MpObject extends MpEntity<EntityType.Object> {
  /**
   * Hash of the model the object was created with.
   *
   * Careful: this is a 64-bit hash, but the getter hands it back as a plain
   * `number`, so the value is rounded (and can even come out negative). It
   * never equals the `bigint` you got from `mp.hashes.resref()` and passed to
   * `create()`, and you cannot convert it back. If you need the hash later,
   * keep the value you created the entity with.
   */
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
