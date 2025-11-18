export class AIbehaviorCommandConditionDefinition extends AIbehaviorConditionDefinition {
  commandName?: AIArgumentMapping;
  useInheritance?: boolean;
  isWaiting?: boolean;
  isExecuting?: boolean;
  commandOut?: AIArgumentMapping;
}
