export class UpdateLocaleRequest extends ScriptableSystemRequest {
  m_type?: string;
  GetType(): string;
  static Create(type: string): UpdateLocaleRequest;
}
