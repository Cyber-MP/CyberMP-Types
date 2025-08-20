import { Project } from "ts-morph";

export const project = new Project();
export const headerComment =
  "// THIS CODE IS GENERATED, PLEASE DO NOT EDIT THIS";

export const defsIndex = {
  enums: new Set<string>(),
  bitfields: new Set<string>(),
  classes: new Set<string>(),
  funcs: new Set<string>(),
};

export const blacklist = ["with", "debugger"];

export const DOTNET_CPP_MAP: Record<string, string> = {
  int: "number",
  int32: "number",
  int16: "number",
  int64: "number",
  uint32: "number",
  uint64: "number",
  single: "number",
  double: "number",
  float: "number",
  decimal: "number",
  boolean: "boolean",
  bool: "boolean",
  string: "string",
  char: "string",
  object: "Record<string, any>",
  void: "void",
  any: "any",
  byte: "number",
  sbyte: "number",
  intptr: "number",
  uintptr: "number",
  guid: "string",
  datetime: "Date",
};
