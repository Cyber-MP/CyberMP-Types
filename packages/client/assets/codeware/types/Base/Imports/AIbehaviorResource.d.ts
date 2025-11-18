export class AIbehaviorResource extends CResource {
  root?: AIbehaviorTreeNodeDefinition;
  arguments?: AITreeArgumentsDefinition;
  delegate?: BehaviorDelegate;
  initializationEvents?: string[];
}
