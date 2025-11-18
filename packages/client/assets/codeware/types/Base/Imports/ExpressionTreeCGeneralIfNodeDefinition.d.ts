export class ExpressionTreeCGeneralIfNodeDefinition extends ExpressionTreeCGeneralNodeDefinition {
  expressions?: LibTreeINodeDefinition[];
  trueBranch?: LibTreeINodeDefinition;
  falseBranch?: LibTreeINodeDefinition;
}
