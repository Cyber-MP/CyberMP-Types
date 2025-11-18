export interface rendRenderMeshBlobHeader {
  version?: number;
  dataProcessing?: number;
  bonePositions?: { x: number; y: number; z: number; w: number }[];
  renderLODs?: number[];
  renderChunks?: number[];
  renderChunkInfos?: rendChunk[];
  speedTreeWind?: number[];
  opacityMicromaps?: number[];
  customData?: number[];
  customDataElemStride?: number;
  topologyData?: number[];
  topologyDataStride?: number;
  topologyMetadata?: number[];
  topologyMetadataStride?: number;
  topology?: rendTopologyData[];
  quantizationScale?: { x: number; y: number; z: number; w: number };
  quantizationOffset?: { x: number; y: number; z: number; w: number };
  vertexBufferSize?: number;
  indexBufferSize?: number;
  indexBufferOffset?: number;
}
