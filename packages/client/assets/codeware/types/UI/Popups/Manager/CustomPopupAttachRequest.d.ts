export class CustomPopupAttachRequest {
  controller?: CustomPopup;
  notificationData?: inkGameNotificationData;
  notificationToken?: inkGameNotificationToken;
  queueIndex?: number;
  GetPopupController(): CustomPopup;
  GetNotificationData(): inkGameNotificationData;
  GetNotificationToken(): inkGameNotificationToken;
  GetQueueIndex(): number;
  static Create(controller: CustomPopup, data: inkGameNotificationData, token: inkGameNotificationToken, queueIndex: number): CustomPopupAttachRequest;
}
