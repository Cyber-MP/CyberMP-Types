export class effectTrackItemForwardDecal extends effectTrackItem {
  mesh?: ResourceRef;
  appearance?: string;
  scale?: IEvaluatorVector;
  additionalRotation?: number;
  sizeThreshold?: number;
  randomRotation?: boolean;
  randomAppearance?: boolean;
  isAttached?: boolean;
  subUVx?: number;
  subUVy?: number;
  frame?: number;
  fadeOutTime?: number;
  fadeInTime?: number;
}
