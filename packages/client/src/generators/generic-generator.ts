import { BaseGenerator } from "./base-generator";
import { Logger } from "../utils/logger";

export class GenericGenerator extends BaseGenerator {
  generate() {
    const sourceFile = this.createSourceFile("./out/globals.d.ts");

    this.addHeader(sourceFile);

    sourceFile.addTypeAlias({
      name: "CName",
      type: "string",
    });

    sourceFile.addTypeAlias({
      name: "Handle",
      typeParameters: [{ name: "T", default: "any" }],
      type: "T",
    });

    sourceFile.addTypeAlias({
      name: "WeakHandle",
      typeParameters: [{ name: "T", default: "any" }],
      type: "T",
    });

    sourceFile.addTypeAlias({
      name: "ScriptRef",
      typeParameters: [{ name: "T", default: "any" }],
      type: "T",
    });

    sourceFile.addTypeAlias({
      name: "NodeRef",
      typeParameters: [{ name: "T", default: "any" }],
      type: "T",
    });

    sourceFile.addTypeAlias({
      name: "TweakDBID",
      type: "string",
    });

    sourceFile.addTypeAlias({
      name: "CRUID",
      type: "any",
    });

    sourceFile.addTypeAlias({
      name: "CGUID",
      type: "any",
    });

    sourceFile.addTypeAlias({
      name: "Variant",
      type: "any",
    });

    sourceFile.addTypeAlias({
      name: "LocalizationString",
      type: "string",
    });

    sourceFile.addTypeAlias({
      name: "Uint16",
      type: "number",
    });

    sourceFile.addTypeAlias({
      name: "Uint8",
      type: "number",
    });

    sourceFile.addTypeAlias({
      name: "Int8",
      type: "number",
    });

    sourceFile.addTypeAlias({
      name: "Int16",
      type: "number",
    });

    sourceFile.addTypeAlias({
      name: "Int32",
      type: "number",
    });

    sourceFile.addTypeAlias({
      name: "DataBuffer",
      type: "any",
    });

    sourceFile.addTypeAlias({
      name: "serializationDeferredDataBuffer",
      type: "any",
    });

    sourceFile.addTypeAlias({
      name: "SharedDataBuffer",
      type: "any",
    });

    sourceFile.addTypeAlias({
      name: "EditorObjectID",
      type: "any",
    });

    sourceFile.addTypeAlias({
      name: "MessageResourcePath",
      type: "any",
    });

    sourceFile.saveSync();

    Logger.success("Generics generated successfully");
  }
}
