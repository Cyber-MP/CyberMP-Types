export class Multilayer_LayerTemplate extends CResource {
  overrides?: Multilayer_LayerTemplateOverrides;
  defaultOverrides?: Multilayer_LayerOverrideSelection;
  colorTexture?: ResourceRef;
  normalTexture?: ResourceRef;
  roughnessTexture?: ResourceRef;
  metalnessTexture?: ResourceRef;
  tilingMultiplier?: number;
  colorMaskLevelsIn?: any;
  colorMaskLevelsOut?: any;
}
