export class AIbehaviorFSMStateDefinition extends AIbehaviorTreeNodeDefinition {
  behaviorRoot?: AIbehaviorTreeNodeDefinition;
  isInitial?: boolean;
  isExit?: boolean;
  completionStatus?: AIbehaviorStateCompletionStatus;
}
