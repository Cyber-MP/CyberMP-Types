export class ReflectionClass extends ReflectionType {
  GetAlias(): string;
  GetParent(): ReflectionClass;
  GetProperty(name: string): ReflectionProp;
  GetFunction(name: string): ReflectionMemberFunc;
  GetStaticFunction(name: string): ReflectionStaticFunc;
  GetProperties(): ReflectionProp[];
  GetFunctions(): ReflectionMemberFunc[];
  GetStaticFunctions(): ReflectionStaticFunc[];
  IsNative(): boolean;
  IsAbstract(): boolean;
  IsA(base: string): boolean;
  MakeHandle(): ISerializable;
}
