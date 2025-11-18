export class questForcedBehaviourNodeDefinition extends questSignalStoppingNodeDefinition {
  puppet?: EntityReference;
  tree?: questForcedBehaviorReference;
  behavior?: AIbehaviorParameterizedBehavior;
}
