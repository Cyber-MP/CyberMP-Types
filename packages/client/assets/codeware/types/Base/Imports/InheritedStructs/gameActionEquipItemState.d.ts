export interface gameActionEquipItemState {
  replicationId?: number;
  type?: number;
  startTimeStamp?: netTime;
  stopTimeStamp?: netTime;
  updateBucket?: number;
  slotId?: TweakDBID;
  itemId?: ItemID;
  animFeatureNameRight?: string;
  animFeatureNameLeft?: string;
  duration?: number;
  spawnDelay?: number;
}
