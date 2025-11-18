export class entTriggerVOEvent extends Event {
  triggerBaseName?: string;
  triggerVariationIndex?: number;
  triggerVariationNumber?: number;
  debugInitialContext?: string;
  answeringEntityIDHash?: bigint;
  ignoreGlobalVoLimitCheck?: boolean;
  overridingVoContext?: locVoiceoverContext;
  overridingVoiceoverExpression?: locVoiceoverExpression;
  overrideVoiceoverExpression?: boolean;
  overridingVisualStyleValue?: number;
  overrideVisualStyle?: boolean;
}
