export class AIbehaviorDriveChaseTargetTreeNodeDefinition extends AIbehaviorDriveTreeNodeDefinition {
  target?: AIArgumentMapping;
  distanceMin?: AIArgumentMapping;
  distanceMax?: AIArgumentMapping;
  forcedStartSpeed?: AIArgumentMapping;
  needDriver?: AIArgumentMapping;
  aggressiveRammingEnabled?: AIArgumentMapping;
  ignoreChaseVehiclesLimit?: AIArgumentMapping;
  boostDrivingStats?: AIArgumentMapping;
}
