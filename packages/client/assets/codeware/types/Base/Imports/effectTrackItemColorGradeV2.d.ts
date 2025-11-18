export class effectTrackItemColorGradeV2 extends effectTrackItem {
  contrast?: effectEffectParameterEvaluatorFloat;
  contrastPivot?: effectEffectParameterEvaluatorFloat;
  saturation?: effectEffectParameterEvaluatorFloat;
  hue?: effectEffectParameterEvaluatorFloat;
  brightness?: effectEffectParameterEvaluatorFloat;
  lowRange?: effectEffectParameterEvaluatorFloat;
  highRange?: effectEffectParameterEvaluatorFloat;
  lift?: effectEffectParameterEvaluatorVector;
  gamma?: effectEffectParameterEvaluatorVector;
  gain?: effectEffectParameterEvaluatorVector;
  offset?: effectEffectParameterEvaluatorVector;
  shadow?: effectEffectParameterEvaluatorVector;
  midtone?: effectEffectParameterEvaluatorVector;
  highlight?: effectEffectParameterEvaluatorVector;
}
