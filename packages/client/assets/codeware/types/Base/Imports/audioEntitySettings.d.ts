export abstract class audioEntitySettings extends audioAudioMetadata {
  commonSettings?: audioCommonEntitySettings;
  scanningSettings?: audioScanningSettings;
  auxiliaryMetadata?: audioAuxiliaryMetadata;
  emitterDecoratorMetadata?: string;
  preferSoundComponentPosition?: boolean;
}
