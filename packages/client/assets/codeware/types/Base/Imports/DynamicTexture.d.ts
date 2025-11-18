export class DynamicTexture extends ITexture {
  width?: number;
  height?: number;
  scaleToViewport?: boolean;
  mipChain?: boolean;
  samplesCount?: number;
  dataFormat?: DynamicTextureDataFormat;
  generator?: IDynamicTextureGenerator;
}
