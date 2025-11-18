export class entRenderToTextureCameraComponent extends entCameraComponent {
  isEnabled?: boolean;
  virtualCameraName?: string;
  dynamicTextureRes?: ResourceAsyncRef;
  depthDynamicTextureRes?: ResourceRef;
  albedoDynamicTextureRes?: ResourceRef;
  normalsDynamicTextureRes?: ResourceRef;
  particlesDynamicTextureRes?: ResourceRef;
  resolutionWidth?: number;
  resolutionHeight?: number;
  aspectRatio?: number;
  env?: ResourceRef;
  params?: WorldRenderAreaSettings;
  renderingMode?: entRenderToTextureMode;
  depthCutDistance?: number;
  backgroundColor?: Color;
  overrideBackgroundColor?: boolean;
  renderSceneLayer?: RenderSceneLayer;
  features?: entRenderToTextureFeatures;
  streamingDistance?: number;
}
