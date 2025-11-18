export class UpdateTranslationsRequest extends ScriptableSystemRequest {
  m_force?: boolean;
  IsForced(): boolean;
  static Create(force?: boolean): UpdateTranslationsRequest;
}
