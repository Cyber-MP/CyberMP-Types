export class animAnimStateTransitionDescription extends ISerializable {
  targetStateIndex?: number;
  condition?: animIAnimStateTransitionCondition;
  isEnabled?: boolean;
  interpolator?: animIAnimStateTransitionInterpolator;
  duration?: number;
  priority?: number;
  syncMethod?: animISyncMethod;
  isForcedToTrue?: boolean;
  supportBlendFromPose?: boolean;
  canRequestInertialization?: boolean;
  animFeatureName?: string;
  actionAnimDatabaseRef?: ResourceRef;
  isOutTransitionFromAction?: boolean;
}
