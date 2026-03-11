import { Project } from 'ts-morph';

export const project = new Project();
export const headerComment =
  '// THIS CODE IS GENERATED, PLEASE DO NOT EDIT THIS';

export const defsIndex = {
  enums: new Set<string>(),
  bitfields: new Set<string>(),
  classes: new Set<string>(),
  funcs: new Set<string>(),
};

export const blacklist = ['with', 'debugger'];

export enum LuaPrimitiveDef {
  Void = 'void',
  Bool = 'Bool',
  Int8 = 'Int8',
  Uint8 = 'Uint8',
  Int16 = 'Int16',
  Uint16 = 'Uint16',
  Int32 = 'Int32',
  Uint32 = 'Uint32',
  Int64 = 'Int64',
  Uint64 = 'Uint64',
  Float = 'Float',
  Double = 'Double',
  String = 'String',
  LocalizationString = 'LocalizationString',
  CName = 'string | CName',
  TweakDBID = 'TweakDBID',
  NodeRef = 'NodeRef',
  DataBuffer = 'DataBuffer',
  serializationDeferredDataBuffer = 'serializationDeferredDataBuffer',
  SharedDataBuffer = 'SharedDataBuffer',
  CDateTime = 'CDateTime',
  CGUID = 'CGUID',
  CRUID = 'CRUID',
  //CRUIDRef = 'any',
  EditorObjectID = 'EditorObjectID',
  //GamedataLocKeyWrapper = 'any',
  MessageResourcePath = 'MessageResourcePath',
  //RuntimeEntityRef = 'RuntimeEntityRef',
  Variant = 'Variant',
}
