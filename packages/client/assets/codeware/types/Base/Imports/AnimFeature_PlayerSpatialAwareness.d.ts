export class AnimFeature_PlayerSpatialAwareness extends AnimFeature {
  leftClosestVector?: { x: number; y: number; z: number; w: number };
  rightClosestVector?: { x: number; y: number; z: number; w: number };
  upHitPosition?: { x: number; y: number; z: number; w: number };
  forwardDistance?: number;
  SetForwardDistance(): void;
  SetLeftClosestVector(): void;
  SetRightClosestVector(): void;
  SetSetUpHitPosition(): void;
}
