export class worldStaticFogVolumeNode extends worldNode {
  priority?: number;
  absolute?: boolean;
  applyHeightFalloff?: boolean;
  densityFalloff?: number;
  blendFalloff?: number;
  densityFactor?: number;
  absorption?: number;
  streamingDistance?: number;
  ambientScale?: number;
  envColorGroup?: EEnvColorGroup;
  color?: Color;
  lightChannels?: number;
}
