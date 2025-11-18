export class PlayerGenderWatcher {
  m_game?: GameInstance;
  m_callbackID?: number;
  Initialize(game: GameInstance): void;
  Start(): void;
  Stop(): void;
  OnPlayerAttached(player: GameObject): void;
}
