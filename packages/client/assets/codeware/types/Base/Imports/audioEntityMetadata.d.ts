export class audioEntityMetadata extends audioAudioMetadata {
  fallbackDecorators?: string[];
  defaultPositionName?: string;
  defaultEmitterName?: string;
  isDefaultForEntityType?: string;
  preferSoundComponentPosition?: boolean;
  priority?: number;
  rigMetadata?: string;
  emitterDescriptions?: audioEntityEmitterSettings[];
  alwaysCreateDefaultEmitter?: boolean;
}
