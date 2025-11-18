export class workEntryAnim extends workIEntry {
  animName?: string;
  idleAnim?: string;
  movementType?: moveMovementType;
  orientationType?: moveMovementOrientationType;
  isSynchronized?: boolean;
  slotName?: string;
  syncOffset?: Transform;
  blendOutTime?: number;
}
