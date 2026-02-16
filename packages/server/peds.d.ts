interface MpPed extends MpEntity {
  readonly health: number;
  readonly model: TweakDBID;
  readonly appearance: CName;

  destroy(): void;
}

type CreatePedOptions = {
  model: TweakDBID;
  appearance: CName;
  position: Vector3;
  health?: number;
  yaw?: number;
  dimension?: number;
};

interface MpPeds extends MpEntities<MpPed> {
  create(options: CreatePedOptions): MpPed;

  destroy(ped: MpPed | number): void;

  toArray(): MpPed[];
}
