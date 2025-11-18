export class AIbehaviorTrackPatrolProgressNodeDefinition extends AIbehaviorDecoratorNodeDefinition {
  pathParameters?: AIArgumentMapping;
  patrolProgress?: AIArgumentMapping;
  startFromClosestPoint?: AIArgumentMapping;
  patrolContinuationPolicy?: AIArgumentMapping;
  teleportPositionAfterTimeSkipping?: AIArgumentMapping;
  teleportRotationAfterTimeSkipping?: AIArgumentMapping;
  handleTeleportRequest?: AIArgumentMapping;
  fastForwardAfterTeleport?: AIArgumentMapping;
}
