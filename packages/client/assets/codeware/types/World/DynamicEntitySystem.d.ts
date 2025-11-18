export class DynamicEntitySystem extends IGameSystem {
  IsReady(): boolean;
  IsRestored(): boolean;
  CreateEntity(spec: DynamicEntitySpec): string;
  DeleteEntity(id: string): boolean;
  EnableEntity(id: string): boolean;
  DisableEntity(id: string): boolean;
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
  DeleteTagged(tag: string): void;
  EnableTagged(tag: string): void;
  DisableTagged(tag: string): void;
  RegisterListener(tag: string, target: IScriptable, function: string): void;
  UnregisterListener(tag: string, target: IScriptable, function: string): void;
  UnregisterListeners(tag: string): void;
}

export function GetDynamicEntitySystem(): DynamicEntitySystem;
