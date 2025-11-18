export interface inkWindowDrawMetrics {
  allTextures?: { x: number; y: number }[];
  textureSizeTypes?: { x: number; y: number }[];
  textureTypeTotal?: number[];
  maxUsedTextureTypes?: number[];
  drawMetrics?: inkSingleDrawMetric[];
}
