export interface scnAnimationRid {
  tag?: scnRidTag;
  animation?: animAnimation;
  events?: animEventsContainer;
  motionExtracted?: boolean;
  offset?: Transform;
  bonesCount?: number;
  trajectoryBoneIndex?: number;
}
