export class audioBreathingStateMetadata extends audioAudioMetadata {
  inhaleSound?: string;
  exhaleSound?: string;
  paramChangeSpeed?: number;
  targetBpm?: number;
  targetTimeDistortion?: number;
  stateMinimalTime?: number;
  exhaustionChangeSpeed?: number;
  targetExhaustion?: number;
  loopBehavior?: audiobreathingLoopBehavior;
  startStateFromBreath?: boolean;
}
