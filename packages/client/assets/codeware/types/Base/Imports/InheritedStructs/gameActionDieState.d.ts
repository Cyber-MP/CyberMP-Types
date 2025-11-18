export interface gameActionDieState {
  replicationId?: number;
  type?: number;
  startTimeStamp?: netTime;
  stopTimeStamp?: netTime;
  updateBucket?: number;
  owner?: wref;
  movingAgent?: wref;
  ragdollComponent?: wref;
  slotComponent?: wref;
}
