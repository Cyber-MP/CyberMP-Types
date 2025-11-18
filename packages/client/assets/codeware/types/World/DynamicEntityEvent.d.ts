export enum DynamicEntityEventType {
  Created = 0,
  Deleted = 1,
  Spawned = 2,
  Despawned = 3,
  Dead = 4
}

export class DynamicEntityEvent {
  GetEventType(): DynamicEntityEventType;
  GetEntityID(): string;
  GetEntityTag(): string;
}
