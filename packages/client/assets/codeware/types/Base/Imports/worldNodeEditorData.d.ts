export class worldNodeEditorData extends ISerializable {
  id?: bigint;
  name?: string;
  globalName?: string;
  alternativeGlobalName?: string;
  isGlobalNameLocked?: boolean;
  isAlternativeGlobalNameLocked?: boolean;
  isDestructibleNode?: boolean;
  shouldSkipStreamingInEditor?: boolean;
  excludeOnConsole?: boolean;
  excludeOnNextGenConsoles?: boolean;
  proxyMeshDependency?: worldProxyMeshDependencyMode;
  transform?: worldNodeTransform;
  pivotTransform?: Transform;
  variantId?: number;
  questPrefabRefHash?: bigint;
  isInterior?: boolean;
  isDiscarded?: boolean;
  isSnapTarget?: boolean;
  isSnapSource?: boolean;
  maxStreamingDistance?: number;
  initialGlobalNameHash?: string;
}
