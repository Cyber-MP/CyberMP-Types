export abstract class AIbehaviorConditionNodeDefinition extends AIbehaviorDecoratorNodeDefinition {
  condition?: AIbehaviorConditionDefinition;
  resultIfFailed?: AIbehaviorCompletionStatus;
}
