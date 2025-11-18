export class animAnimNode_StateMachine extends animAnimNode_Base {
  states?: animAnimNode_State[];
  frozenState?: animAnimNode_StateFrozen;
  transitions?: animAnimStateTransitionDescription[];
  conditionalEntries?: animAnimStateMachineConditionalEntry[];
  globalTransitions?: animAnimStateTransitionDescription[];
  anyStateInterpolator?: animIAnimStateTransitionInterpolator;
  defaultStateIndex?: number;
  notifyOnEnterState?: boolean;
}
