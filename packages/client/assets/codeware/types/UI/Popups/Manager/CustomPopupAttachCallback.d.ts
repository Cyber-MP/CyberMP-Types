export class CustomPopupAttachCallback extends DelayCallback {
  m_manager?: CustomPopupManager;
  m_request?: CustomPopupAttachRequest;
  Call(): void;
  static Create(manager: CustomPopupManager, request: CustomPopupAttachRequest): CustomPopupAttachCallback;
}
