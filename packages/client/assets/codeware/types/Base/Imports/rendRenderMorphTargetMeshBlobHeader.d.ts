export interface rendRenderMorphTargetMeshBlobHeader {
  version?: number;
  numDiffs?: number;
  numDiffsMapping?: number;
  numTargets?: number;
  targetStartsInVertexDiffs?: number[];
  targetStartsInVertexDiffsMapping?: number[];
  targetPositionDiffScale?: { x: number; y: number; z: number; w: number }[];
  targetPositionDiffOffset?: { x: number; y: number; z: number; w: number }[];
  numVertexDiffsInEachChunk?: number[][];
  numVertexDiffsMappingInEachChunk?: number[][];
  targetTextureDiffsData?: rendRenderMorphTargetMeshBlobTextureData[];
}
