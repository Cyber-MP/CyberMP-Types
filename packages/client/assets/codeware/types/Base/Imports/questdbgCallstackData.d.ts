export interface questdbgCallstackData {
  resourceHash?: bigint;
  phases?: questdbgCallstackPhase[];
  blocks?: questdbgCallstackBlock[];
  executed?: bigint[];
  executedHistory?: bigint[];
  failed?: bigint[];
  callstackRevision?: number;
}
