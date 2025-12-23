interface MpPed extends MpEntity {
  readonly health: number;
}

type CreatePedOptions = {
  model: GameHash;
  position: Vector3;
};

interface MpPeds extends MpEntities<MpPed> {
  create(
    model: number,
    x: number,
    y: number,
    z: number,
    health: number,
    yaw: number,
  ): MpPed;
  create(options: CreatePedOptions): MpPed;
}
