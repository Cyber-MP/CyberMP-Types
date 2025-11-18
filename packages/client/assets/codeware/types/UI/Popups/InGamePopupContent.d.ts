export class InGamePopupContent extends inkCustomController {
  m_content?: wref;
  OnCreate(): void;
  OnReparent(parent: inkCompoundWidget): Void;
  GetSize(): { x: number; y: number };
  static Create(): InGamePopupContent;
}
