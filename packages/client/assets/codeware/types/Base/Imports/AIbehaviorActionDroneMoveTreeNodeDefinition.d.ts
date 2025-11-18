export class AIbehaviorActionDroneMoveTreeNodeDefinition extends AIbehaviorActionTreeNodeDefinition {
  moveType?: AIArgumentMapping;
  target?: AIArgumentMapping;
  movementTarget?: AIArgumentMapping;
  toleranceRadius?: AIArgumentMapping;
  desiredDistanceFromTarget?: AIArgumentMapping;
  strafingTarget?: AIArgumentMapping;
  stopWhenDestinationReached?: AIArgumentMapping;
  rotateEntity?: AIArgumentMapping;
}
