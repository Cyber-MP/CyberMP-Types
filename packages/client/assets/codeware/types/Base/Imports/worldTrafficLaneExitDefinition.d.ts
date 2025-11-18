export interface worldTrafficLaneExitDefinition {
  outLaneRef?: string;
  exitPosition?: { x: number; y: number; z: number; w: number };
  exitProbability?: number;
  endConnection?: boolean;
  thisLaneReversed?: boolean;
  outLaneReversed?: boolean;
}
