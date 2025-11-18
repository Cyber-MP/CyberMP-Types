export class ReflectionFunc {
  GetName(): string;
  GetFullName(): string;
  GetParameters(): ReflectionProp[];
  GetReturnType(): ReflectionType;
  IsNative(): boolean;
  IsStatic(): boolean;
}

export class ReflectionMemberFunc extends ReflectionFunc {
  Call(self: IScriptable, args?: Variant[], status?: script_ref): Variant;
}

export class ReflectionStaticFunc extends ReflectionFunc {
  Call(args?: Variant[], status?: script_ref): Variant;
}
