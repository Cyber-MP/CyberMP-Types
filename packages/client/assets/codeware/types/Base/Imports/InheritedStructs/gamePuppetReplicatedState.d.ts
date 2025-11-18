export interface gamePuppetReplicatedState {
  recordID?: TweakDBID;
  persistentID?: bigint;
  initialOrientation?: { roll: number; pitch: number; yaw: number };
  initialLocation?: { x: number; y: number; z: number };
  initialAppearance?: string;
  actionsBuffer?: gameActionsReplicationBuffer;
  health?: number;
  armor?: number;
  hasCPOMissionData?: boolean;
  CPOMissionVotedHistory?: string[];
  animEventsState?: gameReplicatedAnimControllerEventsState;
  entityEventsState?: gameReplicatedEntityEventsState;
}
