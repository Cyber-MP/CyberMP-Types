export interface gameActionRotateToState {
  angleOffset?: number;
  angleTolerance?: number;
  keepUpdatingTarget?: boolean;
  useRotationTime?: boolean;
  rotationSpeed?: number;
  rotationTime?: number;
  replicationId?: number;
  type?: number;
  startTimeStamp?: netTime;
  stopTimeStamp?: netTime;
  updateBucket?: number;
}
