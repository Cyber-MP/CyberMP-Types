export class worldReflectionProbeNode extends worldNode {
  probeDataRef?: ResourceAsyncRef;
  priority?: number;
  globalProbe?: boolean;
  boxProjection?: boolean;
  neighborMode?: envUtilsNeighborMode;
  edgeScale?: { x: number; y: number; z: number };
  lightChannels?: number;
  emissiveScale?: number;
  reflectionDimming?: number;
  simpleFogColor?: HDRColor;
  simpleFogDensity?: number;
  skyScale?: number;
  allInShadow?: boolean;
  hideSkyColor?: boolean;
  volFogAmbient?: boolean;
  brightnessEVClamp?: number;
  ambientMode?: envUtilsReflectionProbeAmbientContributionMode;
  captureOffset?: { x: number; y: number; z: number };
  nearClipDistance?: number;
  farClipDistance?: number;
  volumeChannels?: number;
  blendRange?: number;
  streamingDistance?: number;
  streamingHeight?: number;
  subScene?: boolean;
  noFadeBlend?: boolean;
}
