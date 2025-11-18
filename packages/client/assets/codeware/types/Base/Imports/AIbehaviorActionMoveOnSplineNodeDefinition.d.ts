export class AIbehaviorActionMoveOnSplineNodeDefinition extends AIbehaviorActionTreeNodeDefinition {
  spline?: AIArgumentMapping;
  strafingTarget?: AIArgumentMapping;
  movementType?: AIArgumentMapping;
  ignoreNavigation?: AIArgumentMapping;
  snapToTerrain?: AIArgumentMapping;
  rotateEntity?: AIArgumentMapping;
  startFromClosestPoint?: AIArgumentMapping;
  splineRecalculation?: AIArgumentMapping;
  useStart?: AIArgumentMapping;
  useStop?: AIArgumentMapping;
  reverse?: AIArgumentMapping;
  isBackAndForth?: AIArgumentMapping;
  isInfinite?: AIArgumentMapping;
  numberOfLoops?: AIArgumentMapping;
  useOffMeshLinkReservation?: AIArgumentMapping;
  disableFootIK?: AIArgumentMapping;
  allowCrowdOnPath?: AIArgumentMapping;
}
