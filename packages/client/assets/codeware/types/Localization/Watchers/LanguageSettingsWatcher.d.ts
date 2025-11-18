export class LanguageSettingsWatcher extends ConfigVarListener {
  m_game?: GameInstance;
  Initialize(game: GameInstance): void;
  Start(): void;
  OnVarModified(groupPath: string, varName: string, varType: ConfigVarType, reason: ConfigChangeReason): void;
}
