export interface gameActionRotateBaseState {
  replicationId?: number;
  type?: number;
  startTimeStamp?: netTime;
  stopTimeStamp?: netTime;
  updateBucket?: number;
  angleOffset?: number;
  angleTolerance?: number;
  keepUpdatingTarget?: boolean;
  useRotationTime?: boolean;
  rotationSpeed?: number;
  rotationTime?: number;
}
