export class AnimFeature_WallRun extends AnimFeature {
  wallOnRightSide?: boolean;
  wallPosition?: { x: number; y: number; z: number; w: number };
  wallNormal?: { x: number; y: number; z: number; w: number };
  SetWallOnRightSide(): void;
}
