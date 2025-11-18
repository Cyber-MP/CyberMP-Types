export abstract class InGamePopup extends CustomPopup {
  m_vignette?: wref;
  m_container?: wref;
  OnCreate(): void;
  CreateVignette(): void;
  CreateContainer(): void;
  OnShow(): void;
  OnHide(): void;
  SetTimeDilation(): void;
  ResetTimeDilation(): void;
  SetBackgroundBlur(): void;
  ResetBackgroundBlur(): void;
  SetUIContext(): void;
  ResetUIContext(): void;
  PlayShowSound(): void;
  PlayHideSound(): void;
  GetQueueName(): string;
}
