export class ReflectionType {
  GetName(): string;
  GetMetaType(): ERTTIType;
  GetInnerType(): ReflectionType;
  MakeInstance(): Variant;
  IsArray(): boolean;
  IsClass(): boolean;
  IsEnum(): boolean;
  IsBitfield(): boolean;
  AsClass(): ReflectionClass;
  AsEnum(): ReflectionEnum;
  AsBitfield(): ReflectionBitfield;
}
