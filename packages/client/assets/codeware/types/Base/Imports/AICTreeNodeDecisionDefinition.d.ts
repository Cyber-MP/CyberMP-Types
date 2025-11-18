export class AICTreeNodeDecisionDefinition extends AICTreeNodeCompositeDefinition {
  child?: LibTreeINodeDefinition;
  expressions?: LibTreeINodeDefinition[];
  interruption?: AIInterruptionSignal;
}
