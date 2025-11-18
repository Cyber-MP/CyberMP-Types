export class AIbehaviorSendSignalTaskDefinition extends AIbehaviorTaskDefinition {
  signalName?: string;
  startAction?: gameBoolSignalAction;
  startActionUserData?: SignalUserDataDefinition;
  endAction?: gameBoolSignalAction;
  endActionUserData?: SignalUserDataDefinition;
}
