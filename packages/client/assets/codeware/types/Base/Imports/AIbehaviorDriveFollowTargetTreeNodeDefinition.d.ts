export class AIbehaviorDriveFollowTargetTreeNodeDefinition extends AIbehaviorDriveTreeNodeDefinition {
  useKinematic?: AIArgumentMapping;
  needDriver?: AIArgumentMapping;
  target?: AIArgumentMapping;
  secureTimeOut?: AIArgumentMapping;
  distanceMin?: AIArgumentMapping;
  distanceMax?: AIArgumentMapping;
  isPlayer?: AIArgumentMapping;
  stopHasReachedTarget?: AIArgumentMapping;
  useTraffic?: AIArgumentMapping;
  allowStubMovement?: AIArgumentMapping;
}
