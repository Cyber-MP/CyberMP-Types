import type { MpEntities, MpEntity } from './entities';
import type { CName, TweakDBID, Vector3 } from './shared';

export interface MpPed extends MpEntity {
  readonly health: number;
  readonly model: TweakDBID;
  readonly appearance: CName;

  destroy(): void;
}

export type CreatePedOptions = {
  model: TweakDBID;
  appearance: CName;
  position: Vector3;
  health?: number;
  yaw?: number;
  dimension?: number;
};

export interface MpPeds extends MpEntities<MpPed> {
  create(options: CreatePedOptions): MpPed;

  destroy(ped: MpPed | number): void;

  toArray(): MpPed[];
}
