export class worldPrefabNode extends worldNode {
  prefab?: ResourceAsyncRef;
  instanceData?: worldPrefabInstanceData;
  enabledVariants?: worldPrefabVariantsList;
  canBeToggledInGame?: boolean;
  noCollisions?: boolean;
  enableRenderSceneLayerOverride?: boolean;
  renderSceneLayerMask?: number;
  streamingImportance?: worldPrefabStreamingImportance;
  streamingOcclusionOverride?: worldPrefabStreamingOcclusion;
  interiorMapContribution?: worldPrefabInteriorMapContribution;
  ignoreMeshEmbeddedOccluders?: boolean;
  ignoreAllOccluders?: boolean;
  occluderAutoHideDistanceScale?: number;
  proxyMeshOnly?: worldPrefabProxyMeshOnly;
  proxyScaleOverride?: boolean;
  proxyScale?: { x: number; y: number; z: number };
  applyMaxStreamingDistance?: boolean;
}
