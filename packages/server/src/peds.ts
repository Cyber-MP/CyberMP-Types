import type { EntityType, MpEntities, MpEntity } from './entities';
import type { CName, GameHash, Vector3 } from './shared';

/**
 * @category Entities/Peds
 */
export interface MpPed extends MpEntity<EntityType.Ped> {
  readonly health: number;
  readonly model: GameHash;
  /**
   * Hash of the appearance the ped was created with.
   *
   * Careful: this is a 64-bit hash, but the getter hands it back as a plain
   * `number`, so the value is rounded (and can even come out negative). It
   * never equals the `bigint` you got from `mp.hashes.cname()` and passed to
   * `create()`, and you cannot convert it back. If you need the hash later,
   * keep the value you created the entity with.
   */
  readonly appearance: CName;

  destroy(): void;
}

/**
 * @category Entities/Peds
 */
export type CreatePedOptions = {
  model: GameHash;
  appearance: CName;
  position: Vector3;
  health?: number;
  yaw?: number;
  dimension?: number;
};

/**
 * @category Entities/Peds
 */
export interface MpPeds extends MpEntities<MpPed> {
  create(options: CreatePedOptions): MpPed;
  destroy(ped: MpPed | number): void;
  toArray(): MpPed[];
}
