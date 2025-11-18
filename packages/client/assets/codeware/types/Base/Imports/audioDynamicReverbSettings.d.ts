export class audioDynamicReverbSettings extends audioAudioMetadata {
  reverbType?: audioDynamicReverbType;
  crossover1?: audioReverbCrossoverParams;
  crossover2?: audioReverbCrossoverParams;
  maxDistance?: number;
  smallReverb?: string;
  smallReverbMaxDistance?: number;
  smallReverbFadeOutThreshold?: number;
  mediumReverb?: string;
  largeReverb?: string;
  vehicleReverb?: string;
  overrideWeaponTail?: boolean;
  sourceBasedReverbSet?: string;
  weaponTailType?: audioWeaponTailEnvironment;
  echoPositionType?: audioEchoPositionType;
  reportPositionType?: audioEchoPositionType;
}
