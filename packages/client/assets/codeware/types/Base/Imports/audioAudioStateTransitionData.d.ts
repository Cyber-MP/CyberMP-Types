export interface audioAudioStateTransitionData {
  targetStateId?: number;
  allConditionsFulfilled?: boolean;
  transitionTime?: number;
  exitTime?: number;
  exitSignal?: string;
  readVariableActions?: audioAudioSceneVariableReadActionData[];
  conditions?: string[];
}
