interface MpObject extends MpEntity {
  readonly model: TweakDBID;

  destroy(): void;
}

type CreateObjectOptions = {
  model: TweakDBID;
  position: Vector3;
  yaw?: number;
  dynamic?: boolean;
  dimension?: number;
};

interface MpObjects extends MpEntities<MpObject> {
  create(options: CreateObjectOptions): MpObject;
  destroy(entity: MpObject | number): void;
  toArray(): MpObject[];
}
