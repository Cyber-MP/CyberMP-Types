export class AIbehaviorEdgeConditionDefinition extends AIbehaviorUnaryConditionDefinition {
  risingEdgeAction?: AIbehaviorEdgeConditionAction;
  fallingEdgeAction?: AIbehaviorEdgeConditionAction;
  initialValue?: boolean;
}
