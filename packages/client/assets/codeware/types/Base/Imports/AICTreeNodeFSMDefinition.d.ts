export class AICTreeNodeFSMDefinition extends AICTreeNodeCompositeDefinition {
  defaultState?: number;
  transitions?: AIFSMTransitionDefinition[];
  onEventTransitions?: AIFSMEventTransitionsListDefinition[];
  states?: AIFSMStateDefinition[];
  sharedVars?: AISharedVarTableDefinition;
}
