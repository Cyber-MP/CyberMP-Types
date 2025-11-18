export class audioCombatVoManagerSettings extends audioAudioMetadata {
  thresholdDbForCombatDialog?: number;
  maxVoHearableHorizontalDistance?: number;
  maxVoHearableVerticalDistance?: number;
  maxVoVisibleDistance?: number;
  triggerVoEventBufferTime?: number;
  triggerIdleChattersTime?: number;
  minNoVOTimeNeededToTryPlayingGenericVO?: number;
  specificVoicesetVoVariationMinRepeatTime?: number;
  forceApucVoiceTagSelectionProbability?: number;
  voiceTagSelectionRandomTimeOffset?: number;
  genericRelaxedVOContexts?: string[];
  genericFearVOContexts?: string[];
  genericAlertedVOContexts?: string[];
  genericCombatVOContexts?: string[];
  genericCombatLosingVOContexts?: string[];
  genericCombatSingleEnemyVOContexts?: string[];
}
