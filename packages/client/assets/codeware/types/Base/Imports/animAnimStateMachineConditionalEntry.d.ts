export class animAnimStateMachineConditionalEntry extends ISerializable {
  targetStateIndex?: number;
  condition?: animIAnimStateTransitionCondition;
  isEnabled?: boolean;
  priority?: number;
  isForcedToTrue?: boolean;
}
