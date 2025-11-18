export class audioAudioFoliageMetadata extends audioAudioMetadata {
  loopStartEvent?: string;
  loopStopEvent?: string;
  locomotionTotalVelocityParam?: string;
  locomotionTotalVelocityThreshold?: number;
  locomotionAngularVelocityMultiplier?: number;
  minFoliageMeshVolumeThreshold?: number;
  maxFoliageMeshHeight?: number;
  playerInsideRequiredPercentage?: number;
  foliageMaterials?: audioAudioFoliageMaterialDictionary;
}
