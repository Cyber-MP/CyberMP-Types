export class RegisterProviderRequest extends ScriptableSystemRequest {
  m_provider?: ModLocalizationProvider;
  GetProvider(): ModLocalizationProvider;
  static Create(provider: ModLocalizationProvider): RegisterProviderRequest;
}
