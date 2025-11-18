export class AIbehaviorMovementPolicyTaskDefinition extends AIbehaviorTaskDefinition {
  useCurrentPolicy?: boolean;
  waitForPolicy?: boolean;
  stopWhenDestinationReached?: AIArgumentMapping;
  policies?: AIbehaviorMovementPolicyTaskItemDefinition[];
}
