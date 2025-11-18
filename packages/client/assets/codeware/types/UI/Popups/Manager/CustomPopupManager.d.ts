export class CustomPopupManager extends ScriptableService {
  m_gameController?: wref;
  m_notificationsContainer?: wref;
  m_bracketsContainer?: wref;
  m_notificationQueues?: string[];
  IsInitialized(): boolean;
  Initialize(controller: inkGameController): void;
  ShowPopup(popupController: CustomPopup): void;
  AttachPopup(request: CustomPopupAttachRequest): void;
  HidePopup(popupController: CustomPopup): void;
  QueueAttachRequest(request: CustomPopupAttachRequest): void;
  OnNotificationClosed(data: inkGameNotificationData): boolean;
  IsOnTop(popupController: CustomPopup): boolean;
  static GetInstance(): CustomPopupManager;
}

export declare function OnPlayerAttach(playerPuppet: GameObject): boolean;

export declare function OnShowCustomPopup(evt: ShowCustomPopupEvent): boolean;

export declare function OnHideCustomPopup(evt: HideCustomPopupEvent): boolean;
