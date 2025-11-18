export class PopupButton extends CustomButton {
  m_isFlipped?: boolean;
  m_bg?: wref;
  m_frame?: wref;
  m_input?: wref;
  CreateWidgets(): void;
  ApplyFlippedState(): void;
  ApplyInputState(): void;
  ApplyHoveredState(): void;
  SetFlipped(isFlipped: boolean): void;
  GetInputAction(): string;
  SetInputAction(action: string): void;
  SetInputKey(input: inkInputKeyData): void;
  static Create(): PopupButton;
}
