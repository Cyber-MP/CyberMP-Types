import { defsIndex } from "../../config/constants";

export interface CodewareTypeJson {
  kind: "named" | "static_array" | string;
  name?: string;
  args?: CodewareTypeJson[];
  element?: CodewareTypeJson;
  size?: number;
}

export interface CodewareTypeAst {
  name: string;
  args?: CodewareTypeAst[];
}

export class CodewareTypeAst {
  // Примитивные типы - маппинг на базовые TypeScript типы или типы из primitives.d.ts
  private static readonly primitiveMapping: Record<string, string> = {
    Bool: "boolean",
    Int8: "Int8",
    Uint8: "Uint8",
    Int16: "Int16",
    Uint16: "Uint16",
    Int32: "Int32",
    Uint32: "number",
    Int64: "bigint",
    Uint64: "bigint",
    Float: "number",
    Double: "number",
    String: "string",
    CName: "CName",
    CRUID: "CRUID",
    CGUID: "CGUID",
    PersistentID: "string",
    EntityID: "string",
    TweakDBID: "TweakDBID",
    LocalizationString: "LocalizationString",
    DataBuffer: "DataBuffer",
    serializationDeferredDataBuffer: "serializationDeferredDataBuffer",
    SharedDataBuffer: "SharedDataBuffer",
    EditorObjectID: "EditorObjectID",
    MessageResourcePath: "MessageResourcePath",
    Variant: "Variant",
    NodeRef: "NodeRef<any>",
  };

  static toTypeScript(type: CodewareTypeJson | null | undefined): string {
    if (!type) return "void";

    // Обрабатываем static_array как обычный массив
    if (type.kind === "static_array") {
      if (type.element) {
        const elementType = this.toTypeScript(type.element);
        return `${elementType}[]`;
      }
      return "any[]";
    }

    if (type.kind === "named") {
      const typeName = type.name || "";

      // Обрабатываем шаблоны (templates) с аргументами
      if (type.args && type.args.length > 0) {
        const innerType = this.toTypeScript(type.args[0]);
        let innerTs = innerType;

        // Проверяем, является ли внутренний тип enum или bitfield
        if (defsIndex.enums.has(innerTs)) {
          innerTs = `CyberEnums.${innerTs}`;
        } else if (defsIndex.bitfields.has(innerTs)) {
          innerTs = `CyberEnums.BitFields.${innerTs}`;
        }

        // Массивы
        if (typeName === "array") {
          return `${innerTs}[]`;
        }

        // Ссылки (ref) - как Handle
        if (typeName === "ref") {
          return `Handle<${innerTs}>`;
        }

        // Weak ссылки (wref) - как WeakHandle
        if (typeName === "wref") {
          return `WeakHandle<${innerTs}>`;
        }

        // Script ссылки (script_ref) - как ScriptRef
        if (typeName === "script_ref") {
          return `ScriptRef<${innerTs}>`;
        }

        // ResRef
        if (typeName === "ResRef") {
          return `ResRef<${innerTs}>`;
        }

        // ResAsyncRef
        if (typeName === "ResAsyncRef") {
          return `ResAsyncRef<${innerTs}>`;
        }

        // CurveData
        if (typeName === "CurveData" || typeName === "curveData") {
          return `CurveData<${innerTs}>`;
        }

        // MultiChannelCurve
        if (
          typeName === "MultiChannelCurve" ||
          typeName === "multiChannelCurve"
        ) {
          return `MultiChannelCurve<${innerTs}>`;
        }

        // Остальные шаблоны - используем имя как есть с generic параметром
        return `${typeName}<${innerTs}>`;
      }

      // Проверяем маппинг примитивных типов
      if (this.primitiveMapping[typeName]) {
        return this.primitiveMapping[typeName];
      }

      // Проверяем, является ли тип enum или bitfield
      if (defsIndex.enums.has(typeName)) {
        return `CyberEnums.${typeName}`;
      } else if (defsIndex.bitfields.has(typeName)) {
        return `CyberEnums.BitFields.${typeName}`;
      }

      // Проверяем, является ли тип классом или функцией
      if (defsIndex.classes.has(typeName) || defsIndex.funcs.has(typeName)) {
        return typeName;
      }

      // Остальные типы - используем имя как есть
      return typeName;
    }

    return "any";
  }
}
