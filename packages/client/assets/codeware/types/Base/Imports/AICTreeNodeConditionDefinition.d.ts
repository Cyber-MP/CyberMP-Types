export class AICTreeNodeConditionDefinition extends AICTreeNodeCompositeDefinition {
  expressions?: LibTreeINodeDefinition[];
  trueBranch?: LibTreeINodeDefinition;
  falseBranch?: LibTreeINodeDefinition;
  reevaluateOnExecution?: boolean;
}
