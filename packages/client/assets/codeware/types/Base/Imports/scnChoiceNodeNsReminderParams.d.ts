export interface scnChoiceNodeNsReminderParams {
  reminderEnabled?: boolean;
  useCustomReminder?: boolean;
  reminderActor?: scnActorId;
  waitTimeForReminderA?: scnSceneTime;
  waitTimeForReminderB?: scnSceneTime;
  waitTimeForReminderC?: scnSceneTime;
  waitTimeForLooping?: scnSceneTime;
}
