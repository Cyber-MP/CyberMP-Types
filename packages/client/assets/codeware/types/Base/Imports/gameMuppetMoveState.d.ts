export interface gameMuppetMoveState {
  desiredSpeed?: number;
  isJumping?: boolean;
  isFalling?: boolean;
  isDoubleJumped?: boolean;
  moveStyle?: gameMuppetMoveStyle;
  jumpStartFrameId?: number;
  landFrameId?: number;
}
