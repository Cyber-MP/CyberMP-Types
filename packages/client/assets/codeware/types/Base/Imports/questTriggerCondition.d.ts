export class questTriggerCondition extends questCondition {
  type?: questTriggerConditionType;
  triggerAreaRef?: string;
  activatorRef?: EntityReference;
  isPlayerActivator?: boolean;
}
