export interface SMeshChunkPacked {
  vertexType?: EMeshVertexType;
  materialID?: string[];
  numBonesPerVertex?: number;
  numVertices?: number;
  numIndices?: number;
  firstVertex?: number;
  firstIndex?: number;
  renderMask?: number;
  chunkRenderMask?: number;
  useForShadowmesh?: boolean;
  streams?: SMeshStream[];
  streamMask?: bigint;
  lodMask?: number;
}
