export interface inkCompositionPreset {
  stateName?: string;
  useBackgroundTexture?: boolean;
  shaderParams?: fxCompositionShaderParams;
  transitions?: inkCompositionTransition[];
}
