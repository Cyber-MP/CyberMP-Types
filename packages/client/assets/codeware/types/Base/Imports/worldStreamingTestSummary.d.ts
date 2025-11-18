export class worldStreamingTestSummary extends ISerializable {
  gameDefinition?: string;
  noCrowds?: boolean;
  testDurationSeconds?: number;
  initialBytesRead?: bigint;
  bytesReadDuringTest?: bigint;
  bytesReadDuringDriving?: bigint;
  bytesReadDuringCooldown?: bigint;
  totalSeeksBytes?: bigint;
  minFps?: number;
  maxFps?: number;
  averageFps?: number;
}
