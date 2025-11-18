export interface SParticleEmitterLODLevel {
  emitterDurationSettings?: EmitterDurationSettings;
  emitterDelaySettings?: EmitterDelaySettings;
  burstList?: ParticleBurst[];
  birthRate?: IEvaluatorFloat;
  sortingMode?: rendEParticleSortingMode;
  lodSwitchDistance?: number;
  isEnabled?: boolean;
}
