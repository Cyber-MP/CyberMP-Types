export class GenderNeutralEntry extends LocalizationEntry {
  m_value?: string;
  GetVariant(gender: PlayerGender): string;
  SetVariant(gender: PlayerGender, value: string): void;
  static Create(key: string): GenderNeutralEntry;
}
