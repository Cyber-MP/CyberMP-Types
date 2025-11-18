export interface rendEmitterLOD {
  lodSwitchDistance?: number;
  burstList?: rendParticleBurst[];
  birthRate?: number[];
  emitterDurationSettings?: rendEmitterDurationSettings;
  emitterDelaySettings?: rendEmitterDelaySettings;
  sortingMode?: rendEParticleSortingMode;
  isEnabled?: boolean;
}
