export class effectTrackItemParticles extends effectTrackItem {
  particleSystem?: ResourceRef;
  emissionScale?: effectEffectParameterEvaluatorFloat;
  alpha?: effectEffectParameterEvaluatorFloat;
  size?: effectEffectParameterEvaluatorFloat;
  velocity?: effectEffectParameterEvaluatorFloat;
  soundPositionName?: string;
  soundPositionOffset?: { x: number; y: number; z: number };
  renderLayerMask?: number;
}
