export class AIbehaviorSelectWorkspotNodeDefinition extends AIbehaviorDecoratorNodeDefinition {
  spotInstance?: AIArgumentMapping;
  workspotData?: AIArgumentMapping;
  dependentWorkspotData?: AIArgumentMapping;
  repeatChild?: boolean;
  fastForwardAfterTeleport?: AIArgumentMapping;
}
