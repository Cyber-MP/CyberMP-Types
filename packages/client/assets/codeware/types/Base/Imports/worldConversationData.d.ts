export class worldConversationData extends ISerializable {
  sceneFilename?: ResourceAsyncRef;
  condition?: questIBaseCondition;
  interruptionOperations?: scnIInterruptionOperation[];
  ignoreLocalLimit?: boolean;
  ignoreGlobalLimit?: boolean;
}
