export class PathTracingSettings extends IAreaSettings {
  albedoModulation?: number;
  diffuseGlobalScale?: number;
  diffuseSunScale?: number;
  diffuseSkyScale?: number;
  diffuseLocalLightsScale?: number;
  diffuseEmissiveScale?: number;
  specularGlobalScale?: number;
  specularSunScale?: number;
  specularSkyScale?: number;
  specularLocalLightsScale?: number;
  specularEmissiveScale?: number;
  maxIntensity?: number;
  GIOnlyLightScale?: number;
  rayNumber?: number;
  bounceNumber?: number;
  rayNumberScreenshot?: number;
  bounceNumberScreenshot?: number;
}
