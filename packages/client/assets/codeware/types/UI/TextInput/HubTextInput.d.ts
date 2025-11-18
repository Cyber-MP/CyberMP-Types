export class HubTextInput extends TextInput {
  m_bg?: wref;
  m_fill?: wref;
  m_frame?: wref;
  m_hover?: wref;
  m_focus?: wref;
  m_useAnimations?: boolean;
  m_activeRootAnimDef?: inkAnimDef;
  m_activeRootAnimProxy?: inkAnimProxy;
  m_hoverFrameAnimDef?: inkAnimDef;
  m_hoverFrameAnimProxy?: inkAnimProxy;
  m_focusFillAnimDef?: inkAnimDef;
  m_focusFillAnimProxy?: inkAnimProxy;
  m_focusFrameAnimDef?: inkAnimDef;
  m_focusFrameAnimProxy?: inkAnimProxy;
  CreateWidgets(): void;
  CreateAnimations(): void;
  ApplyDisabledState(): void;
  ApplyHoveredState(): void;
  ApplyFocusedState(): void;
  ToggleAnimations(useAnimations: boolean): void;
  static Create(): HubTextInput;
}
