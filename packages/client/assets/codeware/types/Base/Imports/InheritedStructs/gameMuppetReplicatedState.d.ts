export interface gameMuppetReplicatedState {
  recordID?: TweakDBID;
  persistentID?: bigint;
  state?: gameMuppetState;
  initialOrientation?: { roll: number; pitch: number; yaw: number };
  initialLocation?: { x: number; y: number; z: number };
  health?: number;
  armor?: number;
}
