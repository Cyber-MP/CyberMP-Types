export class audioBreathingTemporaryStateMetadata extends audioAudioMetadata {
  inhaleSound?: string;
  exhaleSound?: string;
  paramChangeSpeed?: number;
  targetBpm?: number;
  targetTimeDistortion?: number;
  time?: number;
  exhaustionChangeSpeed?: number;
  targetExhaustion?: number;
  loopBehavior?: audiobreathingLoopBehavior;
  startStateFromBreath?: boolean;
}
