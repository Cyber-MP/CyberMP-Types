export class CBitmapTexture extends ITexture {
  width?: number;
  height?: number;
  depth?: number;
  setup?: STextureGroupSetup;
  histBiasMulCoef?: { x: number; y: number; z: number };
  histBiasAddCoef?: { x: number; y: number; z: number };
  renderResourceBlob?: IRenderResourceBlob;
  renderTextureResource?: rendRenderTextureResource;
}
