export interface worldGroupProxyMeshBuildParams {
  buildProxy?: boolean;
  type?: worldProxyMeshBuildType;
  usedMesh?: worldProxyMeshOutputType;
  resolution?: number;
  polycount?: number;
  polycountPercentage?: number;
  coreAxis?: worldProxyCoreAxis;
  groupingNormals?: worldProxyGroupingNormals;
  forceSurfaceFlattening?: boolean;
  forceSeamlessModule?: boolean;
  enableAlphaMask?: boolean;
  windows?: worldProxyWindowsParams;
  textures?: worldProxyTextureParams;
  customGeometry?: worldProxyCustomGeometryParams;
  advancedParams?: worldProxyMeshAdvancedBuildParams;
}
