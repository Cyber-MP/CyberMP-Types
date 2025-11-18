export interface gameActionMoveToPositionState {
  replicationId?: number;
  type?: number;
  startTimeStamp?: netTime;
  stopTimeStamp?: netTime;
  updateBucket?: number;
  target?: { x: number; y: number; z: number };
  useSpotReservation?: boolean;
  usePathfinding?: boolean;
  useStart?: boolean;
  useStop?: boolean;
  movementType?: moveMovementType;
  strafingTarget?: wref;
}
