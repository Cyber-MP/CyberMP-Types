export interface entGarmentParameterComponentData {
  componentID?: string;
  meshGeometryHash?: bigint;
  visibleTrangleIndexBufferHash?: bigint;
  chunks?: entGarmentParameterChunkData[];
  chunksCount?: number;
  hideComponent?: boolean;
  bendPowerMultiplier?: number;
  bendPowerOffset?: number;
  smoothingStrength?: number;
  smoothingThreshold?: number;
  smoothingExponent?: number;
  smoothNormalsEnabled?: boolean;
  smoothingNumNeighbours?: number;
  garmentBorderThreshold?: number;
  removeHiddenTriangles?: boolean;
  disableGarment?: boolean;
  mergeWithInnerLayer?: boolean;
  numIndices?: number;
  numOffsets?: number;
}
