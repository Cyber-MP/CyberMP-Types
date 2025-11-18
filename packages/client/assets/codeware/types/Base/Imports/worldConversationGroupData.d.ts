export class worldConversationGroupData extends ISerializable {
  conversationGroup?: ResourceRef;
  interruptionOperations?: scnIInterruptionOperation[];
  ignoreLocalLimit?: boolean;
  ignoreGlobalLimit?: boolean;
}
