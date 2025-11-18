export class StaticEntitySystem extends IGameSystem {
  IsReady(): boolean;
  SpawnEntity(spec: StaticEntitySpec): string;
  DespawnEntity(id: string): boolean;
  AttachEntity(id: string): boolean;
  DetachEntity(id: string): boolean;
  IsManaged(id: string): boolean;
  IsTagged(id: string, tag: string): boolean;
  IsSpawned(id: string): boolean;
  IsSpawning(id: string): boolean;
  GetEntity(id: string): Entity;
  GetTags(id: string): string[];
  AssignTag(id: string, tag: string): void;
  UnassignTag(id: string, tag: string): void;
  IsPopulated(tag: string): boolean;
  GetTagged(tag: string): Entity[];
  GetTaggedID(tag: string): string;
  GetTaggedIDs(tag: string): string[];
  DespawnTagged(tag: string): void;
  AttachTagged(tag: string): void;
  DetachTagged(tag: string): void;
}

export function GetStaticEntitySystem(): StaticEntitySystem;
