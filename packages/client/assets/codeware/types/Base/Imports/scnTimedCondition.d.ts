export class scnTimedCondition extends ISerializable {
  duration?: scnSceneTime;
  action?: scnChoiceNodeNsTimedAction;
  timeLimitedFinish?: boolean;
}
