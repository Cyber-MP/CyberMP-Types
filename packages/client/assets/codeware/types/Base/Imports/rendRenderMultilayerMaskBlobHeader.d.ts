export interface rendRenderMultilayerMaskBlobHeader {
  version?: number;
  atlasWidth?: number;
  atlasHeight?: number;
  numLayers?: number;
  maskWidth?: number;
  maskHeight?: number;
  maskWidthLow?: number;
  maskHeightLow?: number;
  maskTileSize?: number;
  flags?: number;
}
