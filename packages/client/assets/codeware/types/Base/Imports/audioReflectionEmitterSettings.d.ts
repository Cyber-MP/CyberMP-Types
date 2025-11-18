export class audioReflectionEmitterSettings extends audioAudioMetadata {
  reflectionEvent?: string;
  fadeout?: number;
  reflectionDeltaThreshold?: number;
  maxConcurrentReflections?: number;
  broadcastChannel?: number;
  listenerRelativePosition?: boolean;
  upReflectionEnabled?: boolean;
  shortReflectionIndoors?: boolean;
  reflectionVariant?: audioReflectionVariant;
  backReflectionCutoffSpread?: number;
  backReflectionCutoffStrength?: number;
  backReflectionCutoffSoftness?: number;
  farReflectionDistance?: number;
  nearReflectionDistance?: number;
  minimumFaceAlignement?: number;
  fixedRaycastPitch?: number;
}
