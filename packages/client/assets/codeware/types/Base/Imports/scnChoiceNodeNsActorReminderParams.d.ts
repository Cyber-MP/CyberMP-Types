export class scnChoiceNodeNsActorReminderParams extends ISerializable {
  useCustomReminder?: boolean;
  reminderActor?: scnActorId;
  waitTimeForReminderA?: scnSceneTime;
  waitTimeForReminderB?: scnSceneTime;
  waitTimeForReminderC?: scnSceneTime;
  waitTimeForLooping?: scnSceneTime;
  cutReminderEnabled?: boolean;
  waitTimeToCutReminder?: number;
}
