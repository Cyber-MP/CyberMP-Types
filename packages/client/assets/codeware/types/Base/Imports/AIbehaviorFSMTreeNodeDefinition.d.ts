export class AIbehaviorFSMTreeNodeDefinition extends AIbehaviorTreeNodeDefinition {
  states?: AIbehaviorFSMStateDefinition[];
  transitions?: AIbehaviorFSMTransitionDefinition[];
  initialState?: AIbehaviorFSMStateDefinition;
}
