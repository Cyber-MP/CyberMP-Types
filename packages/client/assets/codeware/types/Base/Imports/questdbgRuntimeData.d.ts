export interface questdbgRuntimeData {
  version?: bigint;
  questResourcePathHash?: bigint;
  selectedBlockId?: bigint;
  objects?: ISerializable[];
}
