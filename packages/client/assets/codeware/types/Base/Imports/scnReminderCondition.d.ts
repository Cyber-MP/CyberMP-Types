export class scnReminderCondition extends ISerializable {
  useCustomReminder?: boolean;
  reminderActor?: scnActorId;
  waitTimeForReminderA?: scnSceneTime;
  waitTimeForReminderB?: scnSceneTime;
  waitTimeForReminderC?: scnSceneTime;
  waitTimeForLooping?: scnSceneTime;
  startTime?: scnSceneTime;
  processStep?: scnReminderConditionProcessStep;
  playing?: boolean;
  running?: boolean;
  reminderParams?: scnChoiceNodeNsReminderParams;
}
