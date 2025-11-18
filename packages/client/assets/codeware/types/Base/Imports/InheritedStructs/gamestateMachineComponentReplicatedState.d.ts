export interface gamestateMachineComponentReplicatedState {
  componentName?: string;
  enabled?: boolean;
  stateContext?: gamestateMachineStateContext;
  enterLadderParameter?: LadderDescription;
  exitLadderParameter?: boolean;
}
