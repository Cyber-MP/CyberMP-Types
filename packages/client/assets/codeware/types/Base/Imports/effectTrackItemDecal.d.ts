export class effectTrackItemDecal extends effectTrackItem {
  material?: ResourceRef;
  scale?: IEvaluatorVector;
  emissiveScale?: IEvaluatorVector;
  normalThreshold?: number;
  horizontalFlip?: boolean;
  verticalFlip?: boolean;
  fadeOutTime?: number;
  fadeInTime?: number;
  additionalRotation?: number;
  randomRotation?: boolean;
  randomAtlasing?: boolean;
  isStretchEnabled?: boolean;
  isAttached?: boolean;
  normalsBlendingMode?: RenderDecalNormalsBlendingMode;
  atlasFrameStart?: number;
  atlasFrameEnd?: number;
  orderPriority?: RenderDecalOrderPriority;
  surfaceType?: ERenderObjectType;
  decalRenderMode?: EDecalRenderMode;
}
