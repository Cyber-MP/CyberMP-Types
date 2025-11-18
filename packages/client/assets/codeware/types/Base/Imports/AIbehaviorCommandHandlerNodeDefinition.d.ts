export class AIbehaviorCommandHandlerNodeDefinition extends AIbehaviorDecoratorNodeDefinition {
  commandName?: string;
  useInheritance?: boolean;
  contexts?: AICommandContextsType[];
  commandOut?: AIArgumentMapping;
  runningSignal?: string;
  waitForCommand?: boolean;
  retryIfCommandEnqueued?: boolean;
  resultIfNoCommand?: AIbehaviorCompletionStatus;
  resultIfChildFailed?: AIbehaviorCompletionStatus;
}
