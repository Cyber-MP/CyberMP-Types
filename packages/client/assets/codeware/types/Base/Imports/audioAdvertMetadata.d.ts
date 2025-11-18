export class audioAdvertMetadata extends audioEmitterMetadata {
  advertSoundNames?: string[];
  minSilenceTime?: number;
  maxSilenceTime?: number;
  minDistance?: number;
  filter?: audioAdvertIndoorFilter;
}
