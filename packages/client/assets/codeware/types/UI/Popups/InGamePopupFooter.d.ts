export class InGamePopupFooter extends inkCustomController {
  m_fluffIcon?: wref;
  m_fluffText?: wref;
  m_inputHolder?: wref;
  m_buttonHints?: wref;
  OnCreate(): void;
  OnInitialize(): void;
  GetHints(): wref;
  SetFluffIcon(icon: string): void;
  SetFluffIcon(icon: string, atlas: string): void;
  SetFluffText(text: string): void;
  static Create(): InGamePopupFooter;
}
