export interface STonemappingACESParams {
  minStops?: number;
  maxStops?: number;
  midGrayScale?: number;
  surroundGamma?: number;
  toneCurveSaturation?: number;
  adjustWhitePoint?: boolean;
  desaturate?: boolean;
  dimSurround?: boolean;
  tonemapLuminance?: boolean;
  applyAfterLUT?: boolean;
}
