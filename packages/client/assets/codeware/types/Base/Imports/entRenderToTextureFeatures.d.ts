export interface entRenderToTextureFeatures {
  renderDecals?: boolean;
  renderParticles?: boolean;
  renderForwardNoTXAA?: boolean;
  antiAliasing?: entRenderToTextureFeaturesPlatform;
  contactShadows?: boolean;
  localShadows?: boolean;
  SSAO?: entRenderToTextureFeaturesPlatform;
  reflections?: entRenderToTextureFeaturesPlatform;
}
