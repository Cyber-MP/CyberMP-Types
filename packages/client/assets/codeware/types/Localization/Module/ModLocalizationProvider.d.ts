export abstract class ModLocalizationProvider extends ScriptableSystem {
  OnAttach(): void;
  GetPackage(language: string): ModLocalizationPackage;
  GetFallback(): string;
  OnLocaleChange(): void;
  OnGenderChange(): void;
  GetOnScreenEntries(language: string, nativeEntries: localizationPersistenceOnScreenEntry[]): void;
}
