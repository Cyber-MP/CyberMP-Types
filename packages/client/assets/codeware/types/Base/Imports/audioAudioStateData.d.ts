export interface audioAudioStateData {
  stateName?: string;
  enterEvent?: string;
  exitEvent?: string;
  exitTransitions?: audioAudioStateTransitionData[];
  mixingActions?: audioMixingActionData[];
  interruptionSources?: string[];
  writeVariableActions?: audioAudioSceneVariableWriteActionData[];
}
