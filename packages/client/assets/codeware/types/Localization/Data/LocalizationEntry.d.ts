export abstract class LocalizationEntry {
  m_key?: string;
  GetKey(): string;
  GetVariant(gender: PlayerGender): string;
  SetVariant(gender: PlayerGender, value: string): void;
  static Hash(str: string): bigint;
}
