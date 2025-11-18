export interface gameActionHitReactionState {
  replicationId?: number;
  type?: number;
  startTimeStamp?: netTime;
  stopTimeStamp?: netTime;
  updateBucket?: number;
  animFeature?: AnimFeature_HitReactionsData;
}
