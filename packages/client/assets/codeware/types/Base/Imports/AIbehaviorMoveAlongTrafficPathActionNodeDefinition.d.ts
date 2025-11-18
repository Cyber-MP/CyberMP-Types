export class AIbehaviorMoveAlongTrafficPathActionNodeDefinition extends AIbehaviorActionTreeNodeDefinition {
  joinTrafficSettings?: AIArgumentMapping;
  ignoreTrafficSpots?: AIArgumentMapping;
  useCrowdAnimationGraph?: AIArgumentMapping;
  workspotData?: AIArgumentMapping;
  workspotExitPositionWS?: AIArgumentMapping;
  workspotReturnPositionVector?: AIArgumentMapping;
  workspotExitTangent?: AIArgumentMapping;
  trafficLaneReturnTangent?: AIArgumentMapping;
  trafficLaneExitTangent?: AIArgumentMapping;
}
