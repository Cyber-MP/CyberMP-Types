export class worldStaticDecalNode extends worldNode {
  material?: ResourceAsyncRef;
  autoHideDistance?: number;
  verticalFlip?: boolean;
  horizontalFlip?: boolean;
  alpha?: number;
  normalThreshold?: number;
  roughnessScale?: number;
  diffuseColorScale?: HDRColor;
  isStretchingEnabled?: boolean;
  enableNormalTreshold?: boolean;
  orderNo?: number;
  surfaceType?: ERenderObjectType;
  normalsBlendingMode?: RenderDecalNormalsBlendingMode;
  decalRenderMode?: EDecalRenderMode;
  shouldCollectWithRayTracing?: boolean;
  forcedAutoHideDistance?: number;
  decalNodeVersion?: number;
}
