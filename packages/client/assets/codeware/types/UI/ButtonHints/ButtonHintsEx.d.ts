export class ButtonHintsEx extends inkCustomController {
  m_buttonHints?: wref;
  m_isLocked?: boolean;
  m_style?: string;
  AddButtonHint(action: string, label: string, holdInteraction: boolean): void;
  AddButtonHint(action: string, label: string): void;
  AddButtonHint(action: string, label: string): void;
  AddCharacterRoatateButtonHint(): void;
  RemoveButtonHint(action: string): void;
  ClearButtonHints(): void;
  Show(): void;
  Hide(): void;
  IsVisible(): boolean;
  Lock(): void;
  Unlock(): void;
  IsLocked(): boolean;
  SetStyle(styleName: string): void;
  ApplyListStyle(): void;
  ApplyItemStyle(item: ButtonHintListItem): void;
  ApplyLastItemStyle(): void;
  static Wrap(root: inkWidget): ButtonHintsEx;
}
