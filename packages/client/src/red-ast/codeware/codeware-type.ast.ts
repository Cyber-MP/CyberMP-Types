import { defsIndex } from "../../config/constants";
import codewareClassMapping from "../../../assets/codeware-class-mapping.json";
import * as fs from "fs";
import * as path from "path";

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

  private static readonly codewareToClassMapping: Record<string, string> =
    codewareClassMapping as Record<string, string>;

  private static baseImportsClassesCache: string[] | null = null;
  private static codewareDirPath: string | null = null;

  private static getBaseImportsClasses(codewareDir: string): string[] {
    if (this.baseImportsClassesCache !== null) {
      return this.baseImportsClassesCache;
    }

    const baseImportsPath = path.join(codewareDir, "Base", "Imports");
    const classes: string[] = [];

    if (!fs.existsSync(baseImportsPath)) {
      this.baseImportsClassesCache = [];
      return classes;
    }

    const walkDir = (currentDir: string) => {
      const entries = fs.readdirSync(currentDir, { withFileTypes: true });

      for (const entry of entries) {
        const fullPath = path.join(currentDir, entry.name);

        if (entry.isDirectory()) {
          walkDir(fullPath);
        } else if (entry.isFile() && entry.name.endsWith(".json")) {
          try {
            const content = JSON.parse(fs.readFileSync(fullPath, "utf-8")) as {
              items?: Array<{
                item?: {
                  kind?: string;
                  class?: { name?: string };
                  struct?: { name?: string };
                };
              }>;
            };

            if (content.items) {
              for (const item of content.items) {
                if (item.item?.kind === "class" && item.item.class?.name) {
                  classes.push(item.item.class.name);
                } else if (
                  item.item?.kind === "struct" &&
                  item.item.struct?.name
                ) {
                  classes.push(item.item.struct.name);
                }
              }
            }
          } catch (error) {}
        }
      }
    };

    walkDir(baseImportsPath);

    this.baseImportsClassesCache = classes.sort((a, b) => b.length - a.length);
    return this.baseImportsClassesCache;
  }

  static initializeBaseImportsClasses(codewareDir: string): void {
    this.codewareDirPath = codewareDir;
    this.baseImportsClassesCache = null;
    this.getBaseImportsClasses(codewareDir);
  }

  static resetBaseImportsCache(): void {
    this.baseImportsClassesCache = null;
  }

  private static applyCodewareMapping(typeName: string): string {
    if (this.codewareToClassMapping[typeName]) {
      const mappedName = this.codewareToClassMapping[typeName];
      if (defsIndex.classes.has(mappedName)) {
        return mappedName;
      }
    }

    if (this.codewareDirPath) {
      const baseImportsClasses = this.getBaseImportsClasses(
        this.codewareDirPath
      );

      if (baseImportsClasses.includes(typeName)) {
        const sortedClasses = Array.from(defsIndex.classes).sort(
          (a, b) => b.length - a.length
        );

        for (const className of sortedClasses) {
          if (className.endsWith(typeName)) {
            return className;
          }
        }
      }
    }

    return typeName;
  }

  static mapClassName(className: string): string {
    return this.applyCodewareMapping(className);
  }

  private static resolveTypeName(typeName: string): string {
    const mappedName = this.applyCodewareMapping(typeName);

    if (this.primitiveMapping[mappedName]) {
      return this.primitiveMapping[mappedName];
    }

    if (defsIndex.enums.has(mappedName)) {
      return `CyberEnums.${mappedName}`;
    } else if (defsIndex.bitfields.has(mappedName)) {
      return `CyberEnums.BitFields.${mappedName}`;
    }

    if (defsIndex.classes.has(mappedName) || defsIndex.funcs.has(mappedName)) {
      return mappedName;
    }

    return mappedName;
  }

  static toTypeScript(type: CodewareTypeJson | null | undefined): string {
    if (!type) return "void";

    if (type.kind === "static_array") {
      if (type.element) {
        const elementType = this.toTypeScript(type.element);
        return `${elementType}[]`;
      }
      return "any[]";
    }

    if (type.kind === "named") {
      const typeName = type.name || "";

      if (type.args && type.args.length > 0) {
        const innerTs = this.toTypeScript(type.args[0]);

        if (typeName === "array") {
          return `${innerTs}[]`;
        }

        if (typeName === "ref") {
          return `Handle<${innerTs}>`;
        }

        if (typeName === "wref") {
          return `WeakHandle<${innerTs}>`;
        }

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

        return `${typeName}<${innerTs}>`;
      }

      return this.resolveTypeName(typeName);
    }

    return "any";
  }
}
