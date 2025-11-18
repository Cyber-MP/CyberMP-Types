export class effectTrackItemColorGrade extends effectTrackItem {
  contrast?: effectEffectParameterEvaluatorFloat;
  saturate?: effectEffectParameterEvaluatorFloat;
  brightness?: effectEffectParameterEvaluatorFloat;
  lutWeight?: effectEffectParameterEvaluatorFloat;
  lutParams?: ColorGradingLutParams;
  lutParamsHdr?: ColorGradingLutParams;
  blendWithBaseLut?: boolean;
  mask?: ERenderObjectType[];
}
