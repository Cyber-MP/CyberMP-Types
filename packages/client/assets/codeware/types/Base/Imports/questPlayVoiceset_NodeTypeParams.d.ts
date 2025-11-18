export interface questPlayVoiceset_NodeTypeParams {
  puppetRef?: EntityReference;
  isPlayer?: boolean;
  voicesetName?: string;
  useVoicesetSystem?: boolean;
  playOnlyGrunt?: boolean;
  overridingVoiceoverContext?: locVoiceoverContext;
  overrideVoiceoverExpression?: boolean;
  overridingVoiceoverExpression?: locVoiceoverExpression;
  overrideVisualStyle?: boolean;
  overridingVisualStyle?: scnDialogLineVisualStyle;
}
