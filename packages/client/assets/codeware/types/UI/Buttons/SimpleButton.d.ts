export class SimpleButton extends CustomButton {
  m_isFlipped?: boolean;
  m_bg?: wref;
  m_fill?: wref;
  m_frame?: wref;
  m_disabledRootAnimDef?: inkAnimDef;
  m_disabledRootAnimProxy?: inkAnimProxy;
  m_hoverFillAnimDef?: inkAnimDef;
  m_hoverFillAnimProxy?: inkAnimProxy;
  m_hoverFrameAnimDef?: inkAnimDef;
  m_hoverFrameAnimProxy?: inkAnimProxy;
  m_pressedFillAnimDef?: inkAnimDef;
  m_pressedFillAnimProxy?: inkAnimProxy;
  CreateWidgets(): void;
  CreateAnimations(): void;
  ApplyFlippedState(): void;
  ApplyDisabledState(): void;
  ApplyHoveredState(): void;
  ApplyPressedState(): void;
  SetFlipped(isFlipped: boolean): void;
  static Create(): SimpleButton;
}
