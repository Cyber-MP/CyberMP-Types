export class AIbehaviorPatrolActionNodeDefinition extends AIbehaviorActionTreeNodeDefinition {
  path?: AIArgumentMapping;
  patrolProgress?: AIArgumentMapping;
  startFromClosestPoint?: AIArgumentMapping;
  patrolContinuationPolicy?: AIArgumentMapping;
  playStartAnimation?: AIArgumentMapping;
  fastForwardAfterTeleport?: AIArgumentMapping;
  workspotData?: AIArgumentMapping;
  dependentWorkspotData?: AIArgumentMapping;
  lookAtTarget?: AIArgumentMapping;
  usePathContext?: AIArgumentMapping;
  useOffMeshLinkReservation?: AIArgumentMapping;
}
