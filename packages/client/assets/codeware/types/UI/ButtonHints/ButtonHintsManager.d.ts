export class ButtonHintsManager extends ScriptableService {
  m_buttonHints?: inkWidget;
  m_inputHint?: wref;
  OnUninitialize(): void;
  IsInitialized(): boolean;
  Initialize(buttonHints: inkWidget): void;
  Initialize(buttonHints: ButtonHints): void;
  Initialize(parent: inkGameController): void;
  SpawnButtonHints(parentWidget: wref): ButtonHintsEx;
  GetActionKey(action: string): string;
  static GetInstance(): ButtonHintsManager;
  static InitializeFromController(controller: inkGameController): void;
}

export declare function OnInitialize(): boolean;

export declare function OnInitialize(): boolean;
