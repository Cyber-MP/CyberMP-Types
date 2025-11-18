export class InMenuPopupContent extends inkCustomController {
  m_content?: wref;
  m_title?: wref;
  OnCreate(): void;
  GetSize(): { x: number; y: number };
  SetTitle(text: string): void;
  static Create(): InMenuPopupContent;
}
