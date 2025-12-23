interface MpObject extends MpEntity {
  readonly dynamic: boolean;
}

type CreateObjectOptions = {
  model: GameHash;
  position: Vector3;
  yaw?: number;
  dynamic?: boolean;
  dimension?: number;
};

interface MpObjects extends MpEntities<MpObject> {
  create(
    model: GameHash,
    x: number,
    y: number,
    z: number,
    yaw: number,
    dynamic: boolean,
  ): MpObject;
  create(options: CreateObjectOptions): MpObject;
}
