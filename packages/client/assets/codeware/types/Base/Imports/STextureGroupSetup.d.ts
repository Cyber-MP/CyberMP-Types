export interface STextureGroupSetup {
  group?: GpuWrapApieTextureGroup;
  rawFormat?: ETextureRawFormat;
  compression?: ETextureCompression;
  isStreamable?: boolean;
  hasMipchain?: boolean;
  isGamma?: boolean;
  platformMipBiasPC?: number;
  platformMipBiasConsole?: number;
  allowTextureDowngrade?: boolean;
}
