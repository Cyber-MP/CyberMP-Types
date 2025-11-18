export class AIbehaviorActionMoveTreeNodeDefinition extends AIbehaviorActionTreeNodeDefinition {
  movementTarget?: AIArgumentMapping;
  lookAtTarget?: AIArgumentMapping;
  movementType?: AIArgumentMapping;
  tolerance?: AIArgumentMapping;
  ignoreNavigation?: AIArgumentMapping;
  rotateEntity?: AIArgumentMapping;
  useStart?: AIArgumentMapping;
  useStop?: AIArgumentMapping;
  destinationTangent?: AIArgumentMapping;
  startTangent?: AIArgumentMapping;
  spotReservation?: AIArgumentMapping;
  ignoreRestrictedArea?: AIArgumentMapping;
  ignoreCollisionsWhenCloseToTarget?: AIArgumentMapping;
  failWhenStoppedByCollision?: AIArgumentMapping;
}
