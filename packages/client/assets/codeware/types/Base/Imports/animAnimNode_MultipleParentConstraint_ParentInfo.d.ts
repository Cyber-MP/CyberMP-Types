export interface animAnimNode_MultipleParentConstraint_ParentInfo {
  parentTransform?: animTransformIndex;
  parentWeightMode?: animConstraintWeightMode;
  parentStaticWeight?: number;
  parentTrackWeight?: animNamedTrackIndex;
  useComplementWeight?: boolean;
  useOffset?: boolean;
  offset?: QsTransform;
}
