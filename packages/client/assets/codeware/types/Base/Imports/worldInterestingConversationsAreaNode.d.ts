export class worldInterestingConversationsAreaNode extends worldTriggerAreaNode {
  conversationGroups?: ResourceRef[];
  conversationResources?: worldConversationGroupData[];
  conversations?: worldConversationData[];
  workspots?: string[];
  savingStrategy?: audioConversationSavingStrategy;
}
