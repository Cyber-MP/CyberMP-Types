export interface audioDialogLineEventData {
  stringId?: string;
  context?: locVoiceoverContext;
  expression?: locVoiceoverExpression;
  isPlayer?: boolean;
  isRewind?: boolean;
  isHolocall?: boolean;
  customVoEvent?: string;
  seekTime?: number;
  playbackSpeedParameter?: number;
}
