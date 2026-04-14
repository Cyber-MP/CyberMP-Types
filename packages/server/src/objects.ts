import type { EntityType, MpEntities, MpEntity } from './entities';
import type { TweakDBID, Vector3 } from './shared';

export interface MpObject extends MpEntity<EntityType.GameObject> {
  readonly model: TweakDBID;

  destroy(): void;
}

export type CreateObjectOptions = {
  model: TweakDBID;
  position: Vector3;
  yaw?: number;
  dynamic?: boolean;
  dimension?: number;
};

export interface MpObjects extends MpEntities<MpObject> {
  create(options: CreateObjectOptions): MpObject;
  destroy(entity: MpObject | number): void;
  toArray(): MpObject[];
}
