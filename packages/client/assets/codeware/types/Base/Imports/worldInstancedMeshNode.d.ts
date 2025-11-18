export class worldInstancedMeshNode extends worldNode {
  mesh?: ResourceAsyncRef;
  meshAppearance?: string;
  castShadows?: shadowsShadowCastingMode;
  castLocalShadows?: shadowsShadowCastingMode;
  occluderType?: visWorldOccluderType;
  meshLODScales?: number;
  occluderAutohideDistanceScale?: number;
  worldTransformsBuffer?: worldRenderProxyTransformBuffer;
  version?: number;
}
