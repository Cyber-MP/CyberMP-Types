export abstract class ISerializable {
  GetClassName(): string;
  IsA(className: string): boolean;
  IsExactlyA(className: string): boolean;
  Clone(): ISerializable;
  ProcessPostLoad(disablePreInitialization?: boolean): void;
  RefreshResource(disablePreInitialization?: boolean): void;
}
