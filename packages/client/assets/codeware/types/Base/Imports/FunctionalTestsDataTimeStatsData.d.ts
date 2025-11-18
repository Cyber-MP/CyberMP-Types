export class FunctionalTestsDataTimeStatsData extends ISerializable {
  engineTick?: bigint;
  lastFps?: number;
  minFps?: number;
  lastTimeDelta?: number;
  engineTime?: number;
  cpuTime?: number;
  gpuTime?: number;
  rawLocalTime?: bigint;
  playerPosition?: string;
  playerOrientation?: string;
}
