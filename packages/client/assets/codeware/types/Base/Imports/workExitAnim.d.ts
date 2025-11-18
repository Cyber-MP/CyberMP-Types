export class workExitAnim extends workIEntry {
  animName?: string;
  disableAutoTransition?: boolean;
  idleAnim?: string;
  movementType?: moveMovementType;
  isSynchronized?: boolean;
  stayOnNavmesh?: boolean;
  snapZToNavmesh?: boolean;
  forceNoZSnap?: boolean;
  slotName?: string;
  syncOffset?: Transform;
  disableRandomExit?: boolean;
}
