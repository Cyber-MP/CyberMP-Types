export class ReflectionProp {
  GetName(): string;
  GetType(): ReflectionType;
  IsNative(): boolean;
  GetValue(owner: Variant): Variant;
  SetValue(owner: Variant, value: Variant): void;
}
