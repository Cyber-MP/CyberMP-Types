export class AIbehaviorActionDynamicMoveTreeNodeDefinition extends AIbehaviorActionTreeNodeDefinition {
  moveType?: AIArgumentMapping;
  target?: AIArgumentMapping;
  targetPosition?: AIArgumentMapping;
  toleranceRadius?: AIArgumentMapping;
  desiredDistanceFromTarget?: AIArgumentMapping;
  strafingTarget?: AIArgumentMapping;
  stopWhenDestinationReached?: AIArgumentMapping;
  rotateEntity?: AIArgumentMapping;
  ignoreNavigation?: AIArgumentMapping;
}
