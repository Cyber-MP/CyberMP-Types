export class entSkinnedMeshComponent extends entISkinTargetComponent {
  mesh?: ResourceAsyncRef;
  meshAppearance?: string;
  castShadows?: shadowsShadowCastingMode;
  castLocalShadows?: shadowsShadowCastingMode;
  acceptDismemberment?: boolean;
  chunkMask?: bigint;
  renderingPlaneAnimationParam?: string;
  visibilityAnimationParam?: string;
  order?: number;
  isEnabled?: boolean;
  LODMode?: entMeshComponentLODMode;
  useProxyMeshAsShadowMesh?: boolean;
  forcedLodDistance?: entForcedLodDistance;
  overrideMeshNavigationImpact?: boolean;
  navigationImpact?: NavGenNavigationSetting;
  version?: number;
}
