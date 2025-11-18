export interface MorphTargetMeshEntry {
  name?: string;
  regionName?: string;
  faceRegion?: MorphTargetsFaceRegion;
  boneNames?: string[];
  boneRigMatrices?: Matrix[];
}
