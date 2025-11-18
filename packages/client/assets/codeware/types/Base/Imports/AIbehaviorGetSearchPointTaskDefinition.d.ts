export class AIbehaviorGetSearchPointTaskDefinition extends AIbehaviorTaskDefinition {
  inPlayerPositionDelay?: AIArgumentMapping;
  inSearchPositionMaxRadius?: AIArgumentMapping;
  inNearestNavmeshPolyExtent?: AIArgumentMapping;
  inPavementsOnly?: AIArgumentMapping;
  inLastKnownPosition?: AIArgumentMapping;
  outSearchPosition?: AIArgumentMapping;
}
