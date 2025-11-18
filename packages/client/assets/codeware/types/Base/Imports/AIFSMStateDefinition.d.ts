export interface AIFSMStateDefinition {
  onUpdateTransition?: AIFSMTransitionListDefinition;
  onCompleteTransition?: AIFSMTransitionListDefinition;
  onSuccessTransition?: AIFSMTransitionListDefinition;
  onFailureTransition?: AIFSMTransitionListDefinition;
  onInterruptionTransition?: AIFSMTransitionListDefinition;
  onEventTransitions?: AIFSMTransitionListDefinition;
  childNode?: AICTreeNodeDefinition;
}
