export abstract class CustomPopup extends inkCustomController {
  m_notificationData?: inkGameNotificationData;
  m_notificationToken?: inkGameNotificationToken;
  m_transitionAnimProxy?: inkAnimProxy;
  m_closeAction?: string;
  SetNotificationData(notificationData: inkGameNotificationData): void;
  ResetNotificationData(): void;
  IsTopPopup(): boolean;
  OnInitialize(): void;
  OnAttach(): void;
  OnDetach(): void;
  OnShow(): void;
  OnShowFinish(animProxy: inkAnimProxy): boolean;
  OnShown(): void;
  OnHide(): void;
  OnHideFinish(animProxy: inkAnimProxy): boolean;
  OnHidden(): void;
  OnGlobalReleaseInput(evt: inkPointerEvent): boolean;
  GetName(): string;
  GetQueueName(): string;
  IsBlocking(): boolean;
  UseCursor(): boolean;
  Open(requester: wref): void;
  Close(): void;
  Attach(rootWidget: inkCanvas, gameController: wref, notificationData: inkGameNotificationData): void;
  Detach(): void;
}
