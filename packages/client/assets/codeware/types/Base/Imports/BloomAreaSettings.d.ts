export class BloomAreaSettings extends IAreaSettings {
  blurSizeX?: number;
  blurSizeY?: number;
  mipColors?: any;
  mipLuminanceClamp?: any;
  luminanceThresholdMin?: number;
  luminanceThresholdMax?: number;
  sceneColorScale?: number;
  bloomColorScale?: number;
  numDownsamplePasses?: number;
  shaftsAreaSettings?: ShaftsAreaSettings;
}
