export class TonemappingModeLottes extends ITonemappingMode {
  maxInput?: number;
  contrast?: number;
  midIn?: number;
  midOut?: number;
  crosstalk?: { x: number; y: number; z: number };
  crosstalkSaturation?: { x: number; y: number; z: number };
}
