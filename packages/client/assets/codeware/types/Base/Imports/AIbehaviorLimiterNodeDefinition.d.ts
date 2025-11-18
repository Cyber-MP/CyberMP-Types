export class AIbehaviorLimiterNodeDefinition extends AIbehaviorDecoratorNodeDefinition {
  activationLimitPerFrame?: number;
  delayChildActivation?: boolean;
  delayChildActivationIfAttaching?: boolean;
}
