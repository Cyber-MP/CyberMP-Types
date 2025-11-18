export class ResourceToken {
  GetResource(): CResource;
  GetPath(): string;
  GetHash(): bigint;
  IsFinished(): boolean;
  IsLoaded(): boolean;
  IsFailed(): boolean;
  RegisterCallback(target: IScriptable, function: string): void;
}
