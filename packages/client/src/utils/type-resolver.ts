import { defsIndex, DOTNET_CPP_MAP, blacklist } from "../config/constants";

export const unknownTypes: string[] = [];
export function resolveType(raw?: string): string {
  if (!raw) return "any";
  const t = String(raw).trim();

  // [N]Type => treat as Type[]
  const fixedArrayMatch = t.match(/^\s*\[(\d+)\]\s*(.+)$/);
  if (fixedArrayMatch) {
    return `${resolveType(fixedArrayMatch[2].trim())}[]`;
  }

  // static:meta,TYPE  -> strip metadata and recursively resolve TYPE
  if (t.startsWith("static:")) {
    const after = t.slice("static:".length);
    const parts = after
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
    const actual = parts.length ? parts[parts.length - 1] : after;
    return resolveType(actual);
  }

  // nested prefixes (script_ref:array:handle:Foo etc.)
  if (t.includes(":")) {
    const [head, ...rest] = t.split(":");
    const innerRaw = rest.join(":");
    const inner = resolveType(innerRaw);

    switch (head) {
      case "array":
        return `${inner}[]`;
      case "handle":
        return `Handle<${inner}>`;
      case "whandle":
        return `WeakHandle<${inner}>`;
      case "script_ref":
        return `ScriptRef<${inner}>`;
      default:
        // unknown prefix: just return resolved inner
        return inner;
    }
  }

  const low = t.toLowerCase();

  // direct map (DOTNET_CPP_MAP uses lowercase keys)
  if (DOTNET_CPP_MAP[low]) return DOTNET_CPP_MAP[low];

  // numeric types like Int8, Uint16, Int32, Float, Double => number
  if (
    /^(u?int|uint)?\d+$/i.test(t) ||
    /^(int|uint)(8|16|32|64)$/i.test(t) ||
    /^(u?int)(8|16|32|64)$/i.test(t) ||
    /^(float|double|single|decimal)$/i.test(t)
  ) {
    return "number";
  }

  // boolean-like
  if (/^(bool|boolean|ebool)$/i.test(t)) return "boolean";

  // string-like
  if (/^(string|cname|tweakdbid|noderef|nodeRef|guid)$/i.test(t))
    return "string";

  // time-like
  if (/(time|Date)$/i.test(t)) return "Date";

  // known enums/bitfields (exact match or case-insensitive fallback)
  if (defsIndex.enums.has(t) || defsIndex.bitfields.has(t)) return t;
  // try case-insensitive search as fallback (useful if defsIndex keys are different-cased)
  {
    const lowerSet = new Set<string>(
      [
        ...(defsIndex.enums ? Array.from(defsIndex.enums) : []),
        ...(defsIndex.bitfields ? Array.from(defsIndex.bitfields) : []),
      ].map((s) => s.toLowerCase())
    );
    if (lowerSet.has(low)) {
      // return original casing from defsIndex if available
      const found =
        Array.from(
          (defsIndex.enums ? defsIndex.enums : new Set<string>()).values()
        ).find((s) => s.toLowerCase() === low) ??
        Array.from(
          (defsIndex.bitfields
            ? defsIndex.bitfields
            : new Set<string>()
          ).values()
        ).find((s) => s.toLowerCase() === low);
      if (found) return found;
      return t;
    }
  }

  // fallback: return the identifier as-is (preserve original)
  return t || "any";
}
export function getFunctionParams(params: any[]) {
  if (!params || !params.length) {
    return [];
  }

  return params
    ?.filter((o: any) => o.type !== "ScriptGameInstance")
    .map((p: any) => ({
      name: blacklist.includes(p.name) ? `${p.name}1` : p.name,
      type: resolveType(p.type),
    }));
}
