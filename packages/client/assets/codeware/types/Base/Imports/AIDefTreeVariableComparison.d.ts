export class AIDefTreeVariableComparison extends LibTreeDefTreeVariableBoolBase {
  exportAsProperty?: boolean;
  referenceVariableId?: number;
  referenceVariableName?: string;
  referenceVariableShortName?: string;
  referenceType?: string;
  operator?: EComparisonType;
  referenceValue?: Variant;
}
