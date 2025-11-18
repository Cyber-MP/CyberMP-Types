export class AIbehaviorActionMoveToWorkspotNodeDefinition extends AIbehaviorActionTreeNodeDefinition {
  workspotSetup?: AIArgumentMapping;
  lookAtTarget?: AIArgumentMapping;
  movementType?: AIArgumentMapping;
  tolerance?: AIArgumentMapping;
  ignoreNavigation?: AIArgumentMapping;
  rotateEntity?: AIArgumentMapping;
  useStart?: AIArgumentMapping;
  spotReservation?: AIArgumentMapping;
  startTangent?: AIArgumentMapping;
  fastForwardAfterTeleport?: AIArgumentMapping;
  ignoreExploration?: AIArgumentMapping;
  failWhenStoppedByCollision?: AIArgumentMapping;
}
