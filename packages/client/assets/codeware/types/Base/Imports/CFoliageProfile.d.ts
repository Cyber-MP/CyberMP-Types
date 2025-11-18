export class CFoliageProfile extends CResource {
  cutoffAlphaMinMip?: number;
  cutoffAlphaMaxMip?: number;
  billboardCutoffAlpha?: number;
  aoScale?: number;
  terrainBlendScale?: number;
  terrainBlendBias?: number;
  billboardDepthScale?: number;
  billboardRoughnessBias?: number;
  colorGradient?: ResourceRef;
  colorGradientWeight?: number;
  colorGradientDarkenWeight?: number;
  preserveOriginalColor?: number;
}
