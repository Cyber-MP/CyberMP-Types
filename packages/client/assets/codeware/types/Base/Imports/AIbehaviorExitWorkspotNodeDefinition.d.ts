export class AIbehaviorExitWorkspotNodeDefinition extends AIbehaviorDecoratorNodeDefinition {
  skipExitAnimation?: AIArgumentMapping;
  useSlowExitAnimation?: AIArgumentMapping;
  doSlowIfFastExitFails?: AIArgumentMapping;
  stayInWorkspotIfExitFails?: AIArgumentMapping;
  tryBlendFastExitToWalk?: AIArgumentMapping;
  dontRequestExit?: AIArgumentMapping;
  cancelQueuedCommand?: AIArgumentMapping;
  target?: AIArgumentMapping;
}
