export class InGamePopupHeader extends inkCustomController {
  m_title?: wref;
  m_fluffLeft?: wref;
  m_fluffRight?: wref;
  OnCreate(): void;
  SetTitle(text: string): void;
  SetFluffLeft(text: string): void;
  SetFluffRight(text: string): void;
  static Create(): InGamePopupHeader;
}
