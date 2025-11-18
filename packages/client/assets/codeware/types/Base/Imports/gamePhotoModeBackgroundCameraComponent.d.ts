export class gamePhotoModeBackgroundCameraComponent extends entCameraComponent {
  isEnabled?: boolean;
  virtualCameraName?: string;
  dynamicTextureRes?: ResourceAsyncRef;
  env?: ResourceRef;
  params?: WorldRenderAreaSettings;
  depthCutDistance?: number;
  backgroundColor?: Color;
  overrideBackgroundColor?: boolean;
  renderSceneLayer?: RenderSceneLayer;
  streamingDistance?: number;
}
