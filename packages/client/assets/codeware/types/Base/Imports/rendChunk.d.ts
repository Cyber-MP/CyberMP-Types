export interface rendChunk {
  chunkVertices?: rendVertexBufferChunk;
  chunkIndices?: rendIndexBufferChunk;
  numVertices?: number;
  numIndices?: number;
  materialId?: string[];
  vertexFactory?: number;
  baseRenderMask?: number;
  mergedRenderMask?: number;
  renderMask?: number;
  lodMask?: number;
}
