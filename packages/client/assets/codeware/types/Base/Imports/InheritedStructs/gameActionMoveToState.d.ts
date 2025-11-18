export interface gameActionMoveToState {
  replicationId?: number;
  type?: number;
  startTimeStamp?: netTime;
  stopTimeStamp?: netTime;
  updateBucket?: number;
  targetPos?: { x: number; y: number; z: number };
  toleranceRadius?: number;
  rotateEntity?: boolean;
  moveStyle?: number;
}
