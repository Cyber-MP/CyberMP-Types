export class audioAcousticsEmitterMetadata extends audioEmitterMetadata {
  obstuctionEnabled?: boolean;
  occlusionEnabled?: boolean;
  repositioningEnabled?: boolean;
  obstructionFadeTime?: number;
  enableOutdoorness?: boolean;
  postDopplerFactor?: boolean;
  dopplerParameter?: string;
  ignoreOcclusionRadius?: number;
  elevateSource?: boolean;
  leakingFloorHack?: boolean;
}
