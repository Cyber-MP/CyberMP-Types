export class entDecalComponent extends IVisualComponent {
  material?: ResourceRef;
  verticalFlip?: boolean;
  horizontalFlip?: boolean;
  aspectRatio?: number;
  scale?: number;
  visualScale?: { x: number; y: number; z: number };
  alpha?: number;
  normalThreshold?: number;
  roughnessScale?: number;
  orderNo?: number;
  surfaceType?: ERenderObjectType;
  decalRenderMode?: EDecalRenderMode;
  isStretchingEnabled?: boolean;
  normalsBlendingMode?: RenderDecalNormalsBlendingMode;
  shouldCollectWithRayTracing?: boolean;
  isEnabled?: boolean;
}
