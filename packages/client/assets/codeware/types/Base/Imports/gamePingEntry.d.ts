export interface gamePingEntry {
  owner?: wref;
  worldPosition?: { x: number; y: number; z: number; w: number };
  time?: netTime;
  pingType?: gamedataPingType;
  hitObject?: wref;
}
