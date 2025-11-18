export class GenderSensitiveEntry extends LocalizationEntry {
  m_variants?: string[];
  GetVariant(gender: PlayerGender): string;
  SetVariant(gender: PlayerGender, value: string): void;
  static Create(key: string): GenderSensitiveEntry;
}
