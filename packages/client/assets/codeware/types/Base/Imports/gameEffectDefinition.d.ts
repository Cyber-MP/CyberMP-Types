export interface gameEffectDefinition {
  tag?: string;
  objectProviders?: EffectObjectProvider[];
  objectFilters?: gameEffectObjectFilter[];
  effectExecutors?: EffectExecutor[];
  durationModifiers?: EffectDurationModifier[];
  preActions?: EffectPreAction[];
  postActions?: EffectPostAction[];
  noTargetsActions?: EffectAction[];
  settings?: gameEffectSettings;
  debugSettings?: gameEffectDebugSettings;
}
