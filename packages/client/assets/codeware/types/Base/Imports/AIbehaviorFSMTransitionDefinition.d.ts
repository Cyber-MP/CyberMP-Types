export class AIbehaviorFSMTransitionDefinition extends AIbehaviorBehaviorComponentDefinition {
  inState?: number;
  outState?: number;
  evaluationOrder?: number;
  instantConditions?: AIbehaviorInstantConditionDefinition[];
  monitorConditions?: AIbehaviorMonitorConditionDefinition[];
  eventConditions?: AIbehaviorEventConditionDefinition[];
  passiveConditions?: AIbehaviorExpressionSocket[];
}
