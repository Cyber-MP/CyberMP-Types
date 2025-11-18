export abstract class ModLocalizationPackage {
  m_interfaceEntries?: inkHashMap;
  m_subtitleEntries?: inkHashMap;
  GetEntries(type: EntryType): wref;
  GetEntriesList(type: EntryType): wref[];
  DefineTexts(): void;
  DefineSubtitles(): void;
  Text(key: string, value: string): void;
  Text(key: string, valueF: string, valueM: string): void;
  TextF(key: string, value: string): void;
  TextM(key: string, value: string): void;
  Subtitle(key: string, value: string): void;
  Subtitle(key: string, valueF: string, valueM: string): void;
  SubtitleF(key: string, value: string): void;
  SubtitleM(key: string, value: string): void;
}
