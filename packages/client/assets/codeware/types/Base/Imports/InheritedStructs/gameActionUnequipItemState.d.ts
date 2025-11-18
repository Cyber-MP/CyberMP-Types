export interface gameActionUnequipItemState {
  replicationId?: number;
  type?: number;
  startTimeStamp?: netTime;
  stopTimeStamp?: netTime;
  updateBucket?: number;
  slotId?: TweakDBID;
  animFeatureNameRight?: string;
  animFeatureNameLeft?: string;
  duration?: number;
}
