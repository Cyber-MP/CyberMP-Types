export class FunctionalTestsDataMemoryStatsData extends ISerializable {
  totalPhysicalMemory?: bigint;
  availablePhysicalMemory?: bigint;
  runtimeTotalBytesAllocated?: bigint;
  cpuBytesAllocated?: bigint;
  gpuBytesAllocated?: bigint;
  totalAllocationCount?: number;
  cpuAllocationCount?: number;
  gpuAllocationCount?: number;
  engineTick?: bigint;
  lastTimeDelta?: number;
  engineTime?: number;
  rawLocalTime?: bigint;
  playerPosition?: string;
  playerOrientation?: string;
  poolsRuntimeInfo?: FunctionalTestsDataMemoryPoolRuntimeData[];
  poolsCurrentInfo?: FunctionalTestsDataMemoryPoolStaticData[];
}
