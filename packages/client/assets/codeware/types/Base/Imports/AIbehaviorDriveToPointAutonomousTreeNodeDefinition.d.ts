export class AIbehaviorDriveToPointAutonomousTreeNodeDefinition extends AIbehaviorDriveTreeNodeDefinition {
  targetPosition?: AIArgumentMapping;
  maxSpeed?: AIArgumentMapping;
  minSpeed?: AIArgumentMapping;
  clearTrafficOnPath?: AIArgumentMapping;
  minimumDistanceToTarget?: AIArgumentMapping;
  forcedStartSpeed?: AIArgumentMapping;
  driveDownTheRoadIndefinitely?: AIArgumentMapping;
}
