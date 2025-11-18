export class AnimFeature_Climb extends AnimFeature {
  verticalPosition?: { x: number; y: number; z: number; w: number };
  horizontalPosition?: { x: number; y: number; z: number; w: number };
  toVerticalTime?: number;
  verticalToHorizontalTime?: number;
  frontEdgePosition?: { x: number; y: number; z: number; w: number };
  frontEdgeNormal?: { x: number; y: number; z: number; w: number };
  yawAngle?: number;
  stateLength?: number;
  climbType?: number;
  state?: number;
  SetFrontEdgeNormal(): void;
  SetFrontEdgePosition(): void;
  SetHorizontalPosition(): void;
  SetVerticalPosition(): void;
  SetVerticalToHorizontalTime(): void;
}
