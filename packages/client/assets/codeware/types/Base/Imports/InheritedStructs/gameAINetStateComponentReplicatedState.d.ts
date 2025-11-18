export interface gameAINetStateComponentReplicatedState {
  componentName?: string;
  enabled?: boolean;
  replHighLevelState?: gameNetAIState;
  replUpperBodyState?: gameNetAIState;
  replStanceState?: gameNetAIState;
  replHitReactionModeState?: gameNetAIState;
  replBehaviorState?: gameNetAIState;
  replPhaseState?: gameNetAIState;
  replDefenseMode?: gameNetAIState;
  replLocomotionMode?: gameNetAIState;
}
