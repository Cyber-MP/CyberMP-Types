export class AIbehaviorMaybeNodeDefinition extends AIbehaviorDecoratorNodeDefinition {
  onChildSuccess?: AIbehaviorMaybeNodeAction;
  onChildFailure?: AIbehaviorMaybeNodeAction;
}
