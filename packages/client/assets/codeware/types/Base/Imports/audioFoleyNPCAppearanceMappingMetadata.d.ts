export class audioFoleyNPCAppearanceMappingMetadata extends audioAudioMetadata {
  fallbackMetadata?: string;
  NPCsPerAppearance?: audioAppearanceToNPCMetadata[];
  NPCsPerMainMaterial?: audioVisualTagToNPCMetadata[];
  NPCsPerAdditive?: audioVisualTagToNPCMetadata[];
}
