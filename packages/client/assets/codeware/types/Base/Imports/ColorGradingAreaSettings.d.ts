export class ColorGradingAreaSettings extends IAreaSettings {
  contrast?: number;
  contrastPivot?: number;
  saturation?: number;
  hue?: number;
  brightness?: number;
  lift?: ColorBalance;
  gammaValue?: ColorBalance;
  gain?: ColorBalance;
  offset?: ColorBalance;
  lowRange?: number;
  shadowOffset?: ColorBalance;
  midtoneOffset?: ColorBalance;
  highRange?: number;
  highlightOffset?: ColorBalance;
  ldrLut?: ColorGradingLutParams;
  hdrLut?: ColorGradingLutParams;
  forceHdrLut?: boolean;
}
