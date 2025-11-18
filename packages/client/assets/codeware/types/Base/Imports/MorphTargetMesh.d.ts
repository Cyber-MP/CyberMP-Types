export class MorphTargetMesh extends resStreamedResource {
  baseMesh?: ResourceRef;
  targets?: MorphTargetMeshEntry[];
  boundingBox?: Box;
  baseTextureParamName?: string;
  blob?: IRenderResourceBlob;
  baseMeshAppearance?: string;
  baseTexture?: ResourceRef;
}
