export interface gameActionMoveToDynamicNodeState {
  targetPos?: { x: number; y: number; z: number };
  toleranceRadius?: number;
  rotateEntity?: boolean;
  moveStyle?: number;
  replicationId?: number;
  type?: number;
  startTimeStamp?: netTime;
  stopTimeStamp?: netTime;
  updateBucket?: number;
  target?: wref;
  strafingTarget?: wref;
  desiredDistanceFromTarget?: number;
  stopWhenDestinationReached?: boolean;
  pathfindingUpdateInterval?: number;
  usePathfinding?: boolean;
  useStart?: boolean;
  useStop?: boolean;
}
