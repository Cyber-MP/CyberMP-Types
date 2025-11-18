export interface SamplerStateInfo {
  filteringMin?: ETextureFilteringMin;
  filteringMag?: ETextureFilteringMag;
  filteringMip?: ETextureFilteringMip;
  addressU?: ETextureAddressing;
  addressV?: ETextureAddressing;
  addressW?: ETextureAddressing;
  comparisonFunc?: ETextureComparisonFunction;
  register?: number;
}
