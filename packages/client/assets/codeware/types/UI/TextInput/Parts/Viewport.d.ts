export class Viewport extends inkCustomController {
  m_viewport?: wref;
  m_content?: wref;
  m_caretSize?: { x: number; y: number };
  OnCreate(): void;
  CreateWidgets(): void;
  GetCaretSize(): { x: number; y: number };
  SetCaretSize(caretSize: { x: number; y: number }): void;
  UpdateState(contentSize: { x: number; y: number }, caretOffset: number): void;
  static Create(): Viewport;
}
