export class AIbehaviorLineOfSightClearConditionDefinition extends AIbehaviorConditionDefinition {
  collisionFilters?: string[];
  offset?: { x: number; y: number; z: number };
  target?: AIArgumentMapping;
}
