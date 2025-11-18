export class EnvProbeComponent extends IVisualComponent {
  isEnabled?: boolean;
  size?: { x: number; y: number; z: number };
  edgeScale?: { x: number; y: number; z: number };
  emissiveScale?: number;
  globalProbe?: boolean;
  boxProjection?: boolean;
  allInShadow?: boolean;
  streamingDistance?: number;
  streamingHeight?: number;
  blendRange?: number;
  neighborMode?: envUtilsNeighborMode;
  hideSkyColor?: boolean;
  ambientMode?: envUtilsReflectionProbeAmbientContributionMode;
  brightnessEVClamp?: number;
  probeDataRef?: ResourceAsyncRef;
  priority?: number;
  lightChannels?: number;
  volumeChannels?: number;
}
