export abstract class AIbehaviorDistanceToTargetConditionDefinition extends AIbehaviorConditionDefinition {
  target?: AIArgumentMapping;
  distance?: AIArgumentMapping;
  comparisonOperator?: EComparisonType;
}
