export class audioAcousticZoneMetadata extends audioAudioMetadata {
  priority?: number;
  bleadingDistance?: number;
  eventsOnEnter?: string[];
  eventsOnExit?: string[];
  eventsOnActive?: string[];
  soundBanks?: string[];
  parameters?: audioAcousticZoneParameterMapItem[];
  reverbSettings?: string;
  voReverbSettings?: string;
  footstepMaterialOverride?: string;
}
