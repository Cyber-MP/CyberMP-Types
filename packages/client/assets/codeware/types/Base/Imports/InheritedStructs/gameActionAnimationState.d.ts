export interface gameActionAnimationState {
  replicationId?: number;
  type?: number;
  startTimeStamp?: netTime;
  stopTimeStamp?: netTime;
  updateBucket?: number;
  animFeatureName?: string;
  animFeature?: AnimFeature_AIAction;
  useRootMotion?: boolean;
  usePoseMatching?: boolean;
  motionDynamicObjectsCheck?: boolean;
  slideParams?: ActionAnimationSlideParams;
  targetObject?: wref;
  sendLoopEvent?: boolean;
}
