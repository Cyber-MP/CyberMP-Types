export class ReflectionEnum extends ReflectionType {
  GetConstants(): ReflectionConst[];
  IsNative(): boolean;
  AddConstant(name: string, value: bigint): void;
}

export class ReflectionBitfield extends ReflectionType {
  GetConstants(): ReflectionConst[];
  IsNative(): boolean;
}

export class ReflectionConst {
  GetName(): string;
  GetValue(): bigint;
}
