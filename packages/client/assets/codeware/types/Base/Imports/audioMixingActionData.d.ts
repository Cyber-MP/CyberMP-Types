export interface audioMixingActionData {
  actionType?: audioMixingActionType;
  voContext?: locVoiceoverContext;
  tagValue?: string;
  dbOffset?: number;
  distanceRolloffFactor?: number;
  voEventOverride?: string;
  customParametersSetKey?: bigint;
  customParameters?: audioAudSimpleParameter[];
}
