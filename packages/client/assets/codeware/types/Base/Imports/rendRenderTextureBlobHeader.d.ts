export interface rendRenderTextureBlobHeader {
  version?: number;
  sizeInfo?: rendRenderTextureBlobSizeInfo;
  textureInfo?: rendRenderTextureBlobTextureInfo;
  mipMapInfo?: rendRenderTextureBlobMipMapInfo[];
  histogramData?: rendHistogramBias[];
  flags?: number;
}
