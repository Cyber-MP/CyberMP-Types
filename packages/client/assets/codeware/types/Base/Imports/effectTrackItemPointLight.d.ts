export class effectTrackItemPointLight extends effectTrackItem {
  tint?: effectEffectParameterEvaluatorColor;
  intensity?: effectEffectParameterEvaluatorFloat;
  EV?: number;
  radius?: effectEffectParameterEvaluatorFloat;
  offset?: { x: number; y: number; z: number };
  color?: Color;
  envColorGroup?: EEnvColorGroup;
  colorGroupSaturation?: number;
  roughnessBias?: number;
  useInGI?: boolean;
  useInVolFog?: boolean;
  useInTransparents?: boolean;
  useInParticles?: boolean;
  sceneDiffuse?: boolean;
  sceneSpecular?: boolean;
  clampAttenuation?: boolean;
  flicker?: rendSLightFlickering;
}
