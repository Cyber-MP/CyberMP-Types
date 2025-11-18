export class CMesh extends resStreamedResource {
  parameters?: meshMeshParameter[];
  boundingBox?: Box;
  surfaceAreaPerAxis?: { x: number; y: number; z: number };
  materialEntries?: CMeshMaterialEntry[];
  externalMaterials?: ResourceAsyncRef[];
  localMaterialInstances?: CMaterialInstance[];
  localMaterialBuffer?: meshMeshMaterialBuffer;
  preloadExternalMaterials?: ResourceRef[];
  preloadLocalMaterialInstances?: IMaterial[];
  inplaceResources?: ResourceRef[];
  appearances?: meshMeshAppearance[];
  objectType?: ERenderObjectType;
  renderResourceBlob?: IRenderResourceBlob;
  lodLevelInfo?: number[];
  floatTrackNames?: string[];
  boneNames?: string[];
  boneRigMatrices?: Matrix[];
  boneVertexEpsilons?: number[];
  lodBoneMask?: number[];
  constrainAutoHideDistanceToTerrainHeightMap?: boolean;
  forceLoadAllAppearances?: boolean;
  castGlobalShadowsCachedInCook?: boolean;
  castLocalShadowsCachedInCook?: boolean;
  useRayTracingShadowLODBias?: boolean;
  castsRayTracedShadowsFromOriginalGeometry?: boolean;
  isShadowMesh?: boolean;
  isPlayerShadowMesh?: boolean;
}
