export interface gameActionReplicatedState {
  replicationId?: number;
  type?: number;
  startTimeStamp?: netTime;
  stopTimeStamp?: netTime;
  updateBucket?: number;
}
