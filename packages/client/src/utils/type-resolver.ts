import { defsIndex, DOTNET_CPP_MAP, blacklist } from "../config/constants";

export const unknownTypes: string[] = [];
export function resolveType(obj: { type: string; rawType?: boolean }): string {
  const type = obj?.type;
  const rawType = obj?.rawType;

  if (rawType) {
    return type;
  }

  const raw = type;
  if (!raw) return "any";

  const t = String(raw).trim();
  const low = t.toLowerCase();

  // [N]Type => treat as Type[]
  const fixedArrayMatch = t.match(/^\s*\[(\d+)\]\s*(.+)$/);
  if (fixedArrayMatch) {
    return `${resolveType({ type: fixedArrayMatch[2].trim() })}[]`;
  }

  // static:meta,TYPE -> strip metadata and recursively resolve TYPE
  if (t.startsWith("static:")) {
    const after = t.slice("static:".length);
    const parts = after
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
    const actual = parts.length ? parts[parts.length - 1] : after;
    return resolveType({ type: actual });
  }

  // nested prefixes (script_ref:array:handle:Foo etc.)
  if (t.includes(":")) {
    const [head, ...rest] = t.split(":");
    const innerRaw = rest.join(":");
    const inner = resolveType({ type: innerRaw });

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
        return inner;
    }
  }

  // direct map
  if (DOTNET_CPP_MAP[low]) return DOTNET_CPP_MAP[low];

  // numbers
  if (
    /^(u?int|uint)?\d+$/i.test(t) ||
    /^(int|uint)(8|16|32|64)$/i.test(t) ||
    /^(u?int)(8|16|32|64)$/i.test(t) ||
    /^(float|double|single|decimal)$/i.test(t)
  ) {
    return "number";
  }

  // booleans
  if (/^(bool|boolean|ebool)$/i.test(t)) return "boolean";

  // strings
  if (/^(string|cname|tweakdbid|noderef|nodeRef|guid)$/i.test(t))
    return "string";

  // dates/times
  if (/(time|Date)$/i.test(t)) return "Date";

  // --- defsIndex lookups ---
  // enums / bitfields
  if (defsIndex.enums.has(t)) {
    return `CyberEnums.${t}`;
  }

  if (defsIndex.bitfields.has(t)) {
    return `CyberEnums.BitFields.${t}`;
  }

  // classes
  if (defsIndex.classes?.has(t)) return t;

  // funcs (if you want them treated as types, e.g. callable references)
  if (defsIndex.funcs?.has(t)) return t;

  // case-insensitive fallback search across all defsIndex sets
  const lowerSets = [
    ...(defsIndex.enums ?? []),
    ...(defsIndex.bitfields ?? []),
    ...(defsIndex.classes ?? []),
    ...(defsIndex.funcs ?? []),
  ].map((s) => s.toLowerCase());

  if (lowerSets.includes(low)) {
    const allSets = [
      ...(defsIndex.enums ?? []),
      ...(defsIndex.bitfields ?? []),
      ...(defsIndex.classes ?? []),
      ...(defsIndex.funcs ?? []),
    ];

    const found = allSets.find((s) => s.toLowerCase() === low);
    if (found) return found;
    return t;
  }

  unknownTypes.push(t);
  // fallback: original type name
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
      type: resolveType(p),
    }));
}
