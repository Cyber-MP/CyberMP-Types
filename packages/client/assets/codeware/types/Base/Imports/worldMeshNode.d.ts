export class worldMeshNode extends worldNode {
  mesh?: ResourceAsyncRef;
  meshAppearance?: string;
  forceAutoHideDistance?: number;
  occluderType?: visWorldOccluderType;
  occluderAutohideDistanceScale?: number;
  castShadows?: shadowsShadowCastingMode;
  castLocalShadows?: shadowsShadowCastingMode;
  castRayTracedGlobalShadows?: shadowsShadowCastingMode;
  castRayTracedLocalShadows?: shadowsShadowCastingMode;
  windImpulseEnabled?: boolean;
  removeFromRainMap?: boolean;
  renderSceneLayerMask?: number;
  lodLevelScales?: number;
  version?: number;
}
