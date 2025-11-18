export abstract class InMenuPopup extends CustomPopup {
  m_container?: wref;
  m_result?: GenericMessageNotificationResult;
  m_confirmAction?: string;
  OnCreate(): void;
  CreateVignette(): void;
  CreateContainer(): void;
  OnCancel(): void;
  OnConfirm(): void;
  OnInitialize(): void;
  OnConfirmClick(widget: wref): void;
  OnCancelClick(widget: wref): void;
  OnGlobalReleaseInput(evt: inkPointerEvent): boolean;
  Cancel(): void;
  Confirm(): void;
  GetQueueName(): string;
  UseCursor(): boolean;
  GetResult(): GenericMessageNotificationResult;
}
