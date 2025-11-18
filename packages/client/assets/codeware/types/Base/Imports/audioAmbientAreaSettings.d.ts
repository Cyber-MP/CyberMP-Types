export class audioAmbientAreaSettings extends audioAudioMetadata {
  MetadataParent?: string;
  EmitterDecorator?: string;
  Priority?: number;
  EventsOnEnter?: audioAudEventStruct[];
  EventsOnExit?: audioAudEventStruct[];
  EventsOnActive?: audioAudEventStruct[];
  SoundBanks?: audioSoundBankStruct[];
  Switches?: audioAudSwitch[];
  Parameters?: audioAudParameter[];
  Reverb?: string;
  reverbTransitionTime?: number;
  VoReverb?: string;
  FootstepMaterialOverride?: string;
  soundsLimitingSettings?: string;
  isMusic?: boolean;
  groupingSettings?: audioAmbientAreaGroupingSettings;
  quadSettings?: audioQuadEmitterSettings;
  outerDistance?: number;
  verticalOuterDistance?: number;
  insideSourceDistance?: number;
  eventOverrides?: string;
  outdoornessOverride?: boolean;
  outdoorness?: number;
  mergeRoomsWithinArea?: boolean;
  mixingContext?: string;
  ambientPaletteEntries?: audioAmbientPaletteEntry[];
}
