import type { EntityType, MpEntities, MpEntity } from './entities';
import type { CName, TweakDBID, Vector3 } from './shared';

/**
 * @category Entities/Peds
 */
export interface MpPed extends MpEntity<EntityType.Ped> {
  readonly health: number;
  readonly model: TweakDBID;
  readonly appearance: CName;

  destroy(): void;
}

/**
 * @category Entities/Peds
 */
export type CreatePedOptions = {
  model: TweakDBID;
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
