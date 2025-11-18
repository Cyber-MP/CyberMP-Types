export class HubLinkButton extends CustomButton {
  m_icon?: wref;
  m_fluff?: wref;
  m_hover?: wref;
  m_disabledRootAnimDef?: inkAnimDef;
  m_disabledRootAnimProxy?: inkAnimProxy;
  m_hoverFillAnimDef?: inkAnimDef;
  m_hoverFillAnimProxy?: inkAnimProxy;
  CreateWidgets(): void;
  CreateAnimations(): void;
  ApplyDisabledState(): void;
  ApplyHoveredState(): void;
  ApplyPressedState(): void;
  SetIcon(icon: string): void;
  SetIcon(icon: string, atlas: string): void;
  static Create(): HubLinkButton;
}
