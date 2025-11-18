export class audioCombatVoSettings extends audioAudioMetadata {
  answerGroupName?: string;
  isPlayerAlly?: boolean;
  contexts?: string;
  voTriggerVariations?: string;
  generalGruntSettings?: audioGeneralVoiceGruntSettings;
  voTriggerLimits?: audioVoiceTriggerLimits;
  overridingVoTriggerLimits?: string;
  barkTriggerLimits?: audioVoiceTriggerLimits;
  gruntTriggerLimits?: audioVoiceTriggerLimits;
  minDamageToInterruptVoWithPainShort?: number;
  minDamageToInterruptVoWithPainLong?: number;
}
