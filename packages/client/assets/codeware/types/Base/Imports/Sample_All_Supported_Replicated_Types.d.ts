export interface Sample_All_Supported_Replicated_Types {
  bool?: boolean;
  uint8?: number;
  int8?: number;
  uint16?: number;
  int16?: number;
  uint32?: number;
  int32?: number;
  uint64?: bigint;
  int64?: bigint;
  float?: number;
  double?: number;
  name?: string;
  string?: string;
  enum?: Sample_Replicated_Enum;
  struct?: Sample_Replicated_Struct;
  dynamicArray?: Sample_Replicated_Struct[];
  staticArray?: any;
  THandle?: Sample_Replicated_Serializable;
}
