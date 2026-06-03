import { defsIndex, LuaPrimitiveDef } from '../config/constants';
import { cyrb53 } from '../utils/string';
import {
  CodeSyntax,
  RedPrimitiveDef,
  RedTemplateDef,
} from './red-definitions.ast';
import { type RedNodeAst, RedNodeKind } from './red-node.ast';

export interface RedTypeJson {
  readonly a?: number; // flag
  readonly b?: string; // name
  readonly c?: RedTypeJson; // inner type
  readonly d?: number; // array size
}

export interface RedTypeAst extends RedNodeAst {
  readonly flag?: RedPrimitiveDef | RedTemplateDef;
  readonly innerType?: RedTypeAst;
  readonly size?: number;
}

export class RedTypeAst {
  static isPrimitive(type: RedTypeAst): boolean {
    return (
      type.flag !== undefined &&
      type.flag >= RedPrimitiveDef.Void &&
      type.flag <= RedPrimitiveDef.Variant
    );
  }

  static toTypescript(type: RedTypeAst): string {
    if (!type) return 'any';

    // Use aliasName when available (similar to toLuadoc)
    let baseName = type.name ?? 'any';

    if (defsIndex.enums.has(type.name)) {
      baseName = `CyberEnums.${type.name}`;
    } else if (defsIndex.bitfields.has(type.name)) {
      baseName = `CyberBitfields.${type.name}`;
    }

    // Primitive mapping
    if (RedTypeAst.isPrimitive(type)) {
      switch (type.flag as RedPrimitiveDef) {
        case RedPrimitiveDef.Void:
          return 'void';
        case RedPrimitiveDef.Bool:
          return 'boolean';
        case RedPrimitiveDef.Int8:
        case RedPrimitiveDef.Uint8:
        case RedPrimitiveDef.Int16:
        case RedPrimitiveDef.Uint16:
        case RedPrimitiveDef.Int32:
        case RedPrimitiveDef.Uint32:
        case RedPrimitiveDef.Int64:
        case RedPrimitiveDef.Uint64:
        case RedPrimitiveDef.Float:
        case RedPrimitiveDef.Double:
          return 'number';
        case RedPrimitiveDef.String:
        case RedPrimitiveDef.LocalizationString:
        case RedPrimitiveDef.CName:
        case RedPrimitiveDef.TweakDBID:
        case RedPrimitiveDef.NodeRef:
        case RedPrimitiveDef.CGUID:
        case RedPrimitiveDef.CRUID:
        case RedPrimitiveDef.EditorObjectID:
        case RedPrimitiveDef.MessageResourcePath:
          return 'string';
        case RedPrimitiveDef.DataBuffer:
        case RedPrimitiveDef.serializationDeferredDataBuffer:
        case RedPrimitiveDef.SharedDataBuffer:
          // you can change to Uint8Array if you prefer
          return 'ArrayBuffer';
        case RedPrimitiveDef.CDateTime:
          return 'Date';
        case RedPrimitiveDef.Variant:
        default:
          return 'any';
      }
    }

    // Template mapping (templates normally have innerType)
    if (RedTypeAst.isTemplate(type)) {
      let innerTs = type.innerType
        ? RedTypeAst.toTypescript(type.innerType)
        : 'any';

      if (defsIndex.enums.has(innerTs)) {
        innerTs = `CyberEnums.${innerTs}`;
      } else if (defsIndex.bitfields.has(innerTs)) {
        innerTs = `CyberBitfields.${innerTs}`;
      }

      switch (type.flag as RedTemplateDef) {
        case RedTemplateDef.array:
          // static sized arrays still map to T[]
          return `${innerTs}[]`;
        case RedTemplateDef.ref:
          return `Handle<${innerTs}>`;
        case RedTemplateDef.wref:
          return `WeakHandle<${innerTs}>`;
        case RedTemplateDef.script_ref:
          return `ScriptRef<${innerTs}>`;
        case RedTemplateDef.ResRef:
          return `ResRef<${innerTs}>`;
        case RedTemplateDef.ResAsyncRef:
          return `ResAsyncRef<${innerTs}>`;
        case RedTemplateDef.curveData:
          return `CurveData<${innerTs}>`;
        case RedTemplateDef.multiChannelCurve:
          return `MultiChannelCurve<${innerTs}>`;
        default: {
          // fallback: represent as generic-like `Name<Inner>`
          const tmplName =
            RedTypeAst.templateToString(type.flag as RedTemplateDef) ??
            baseName;
          // If templateToString returned a simple token (e.g. "handle") avoid duplicating
          return `${tmplName}<${innerTs}>`;
        }
      }
    }

    // If there's an innerType but it's not flagged as template (some nodes encode generics differently)
    if (type.innerType) {
      const innerTs = RedTypeAst.toTypescript(type.innerType);
      return `${baseName}<${innerTs}>`;
    }

    if (
      defsIndex.classes.has(baseName) ||
      defsIndex.funcs.has(baseName) ||
      defsIndex.enums.has(type.name) ||
      defsIndex.bitfields.has(type.name)
    ) {
      return baseName;
    }

    return 'any';
  }

  static isTemplate(type: RedTypeAst): boolean {
    return (
      type.flag !== undefined &&
      type.flag >= RedTemplateDef.ref &&
      type.flag <= RedTemplateDef.multiChannelCurve
    );
  }

  static testType(type: RedTypeAst, rule: RegExp): boolean {
    if (RedTypeAst.isPrimitive(type)) {
      return false;
    }
    if (type.innerType) {
      return RedTypeAst.testType(type.innerType, rule);
    }
    const name: string = type.name.toLowerCase();
    const aliasName: string | undefined = type.aliasName?.toLowerCase();

    return rule.test(name) || (!!aliasName && rule.test(aliasName));
  }

  static hasStrictType(type: RedTypeAst, query: string): boolean {
    if (RedTypeAst.isPrimitive(type)) {
      return false;
    }
    if (type.innerType) {
      return RedTypeAst.hasStrictType(type.innerType, query);
    }
    const name: string = type.name.toLowerCase();
    const aliasName: string | undefined = type.aliasName?.toLowerCase();

    return name === query || (!!aliasName && aliasName === query);
  }

  static hasType(type: RedTypeAst, words: string[]): boolean {
    if (RedTypeAst.isPrimitive(type)) {
      return false;
    }
    if (type.innerType) {
      return RedTypeAst.hasType(type.innerType, words);
    }
    const name: string = type.name.toLowerCase();
    const aliasName: string | undefined = type.aliasName?.toLowerCase();

    return (
      words.every((word) => name.includes(word)) ||
      (!!aliasName && words.every((word) => aliasName.includes(word)))
    );
  }

  static primitiveToString(flag: RedPrimitiveDef): string {
    return RedPrimitiveDef[flag];
  }

  static templateToString(flag: RedTemplateDef): string {
    switch (flag) {
      case RedTemplateDef.ref:
        return 'handle';
      case RedTemplateDef.wref:
        return 'whandle';
      case RedTemplateDef.ResRef:
        return 'rRef';
      case RedTemplateDef.ResAsyncRef:
        return 'raRef';
      default:
        return RedTemplateDef[flag];
    }
  }

  static primitiveToLuadoc(flag: RedPrimitiveDef): string {
    return LuaPrimitiveDef[RedPrimitiveDef[flag]];
  }

  static toString(type: RedTypeAst, syntax?: CodeSyntax): string {
    let name: string = type.name;
    let str: string = '';

    if (
      (syntax === CodeSyntax.lua || syntax === CodeSyntax.redscript) &&
      type.aliasName
    ) {
      name = type.aliasName;
    }
    if (type.innerType !== undefined) {
      if (syntax === CodeSyntax.pseudocode) {
        if (RedTypeAst.isPrimitive(type)) {
          name = RedTypeAst.primitiveToString(type.flag as RedPrimitiveDef);
        } else if (RedTypeAst.isTemplate(type)) {
          name = RedTypeAst.templateToString(type.flag as RedTemplateDef);
        }
        if (type.size === undefined) {
          str += `${name}:`;
        } else {
          str += `[${type.size}]`;
        }
      } else {
        if (type.size === undefined) {
          str += `${name}<`;
        } else {
          str += '[';
        }
      }
      str += RedTypeAst.toString(type.innerType, syntax);
      if (type.size !== undefined && syntax !== CodeSyntax.pseudocode) {
        str += `; ${type.size}`;
      }
      if (syntax !== CodeSyntax.pseudocode) {
        str += type.size === undefined ? '>' : ']';
      }
    } else {
      str = name;
    }
    return str;
  }

  static toLuadoc(type: RedTypeAst): string {
    let name: string = type.name;
    let str: string = '';

    if (type.aliasName) {
      name = type.aliasName;
    }
    if (RedTypeAst.isPrimitive(type)) {
      name = RedTypeAst.primitiveToLuadoc(type.flag as RedPrimitiveDef);
    } else if (RedTypeAst.isTemplate(type)) {
      name = '';
    }
    if (type.innerType !== undefined) {
      str += name;
      str += RedTypeAst.toLuadoc(type.innerType);
      if (type.flag === RedTemplateDef.array) {
        str += '[]';
      }
    } else {
      str = name;
    }
    return str;
  }

  static fromJson(json: RedTypeJson): RedTypeAst {
    const flag: RedPrimitiveDef | RedTemplateDef | undefined = json.a;
    const name: string =
      flag === undefined
        ? json.b!
        : flag <= RedPrimitiveDef.Variant
          ? RedPrimitiveDef[flag]
          : RedTemplateDef[flag];

    return {
      id: cyrb53(name),
      kind: RedNodeKind.type,
      name: name,
      flag: flag,
      innerType: json.c !== undefined ? RedTypeAst.fromJson(json.c) : undefined,
      size: json.d,
    };
  }

  static loadAlias(nodes: RedNodeAst[], type: RedTypeAst): void {
    if (RedTypeAst.isPrimitive(type)) {
      return;
    }
    if (type.innerType) {
      RedTypeAst.loadAlias(nodes, type.innerType);
      return;
    }
    const alias: RedNodeAst | undefined = nodes.find(
      (node) => node.name === type.name,
    );

    if (!alias) {
      return;
    }
    type.aliasName = alias.aliasName;
  }

  static fromPseudocode(code: string): RedTypeAst | undefined {
    const tokens: string[] = code.split(':').reverse();
    let currentType: RedTypeAst | undefined;
    let innerType: RedTypeAst | undefined;

    for (const token of tokens) {
      const innerDef: any = {};
      const primitiveDef: RedPrimitiveDef | undefined =
        RedTypeAst.pseudocodeToPrimitive(token);
      const templateDef: RedTemplateDef | undefined =
        RedTypeAst.pseudocodeToTemplate(token, innerDef);
      let name: string;

      if (primitiveDef !== undefined) {
        name = RedPrimitiveDef[primitiveDef];
      } else if (templateDef !== undefined) {
        name = RedTemplateDef[templateDef];
      } else {
        name = token;
      }
      currentType = {
        id: cyrb53(name),
        kind: RedNodeKind.type,
        name: name,
        flag: primitiveDef || templateDef,
        innerType: innerType,
        size: innerDef?.size,
      };
      innerType = currentType;
    }
    return currentType;
  }

  static pseudocodeToPrimitive(code: string): RedPrimitiveDef | undefined {
    try {
      return RedPrimitiveDef[code as keyof typeof RedPrimitiveDef];
    } catch (error) {
      return undefined;
    }
  }

  static pseudocodeToTemplate(
    code: string,
    innerDef: any,
  ): RedTemplateDef | undefined {
    const staticArrayMatch: RegExpMatchArray | null = code.match(
      /\\\\\[(?<size>[0-9]+)].*/,
    );

    if (staticArrayMatch) {
      innerDef.size = +staticArrayMatch.groups!['size'];
      return RedTemplateDef.array;
    }
    switch (code) {
      case 'handle':
        return RedTemplateDef.ref;
      case 'whandle':
        return RedTemplateDef.wref;
      case 'rRef':
        return RedTemplateDef.ResRef;
      case 'raRef':
        return RedTemplateDef.ResAsyncRef;
      default:
        try {
          return RedTemplateDef[code as keyof typeof RedTemplateDef];
        } catch (error) {
          return undefined;
        }
    }
  }
}
