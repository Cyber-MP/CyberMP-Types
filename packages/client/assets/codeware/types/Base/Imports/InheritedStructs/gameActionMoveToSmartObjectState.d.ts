export interface gameActionMoveToSmartObjectState {
  targetPos?: { x: number; y: number; z: number };
  toleranceRadius?: number;
  rotateEntity?: boolean;
  moveStyle?: number;
  replicationId?: number;
  type?: number;
  startTimeStamp?: netTime;
  stopTimeStamp?: netTime;
  updateBucket?: number;
  targetHash?: bigint;
  usePathfinding?: boolean;
  useStart?: boolean;
  useStop?: boolean;
  entryType?: gameSmartObjectInstanceEntryType;
  movementType?: moveMovementType;
  strafingTarget?: wref;
  entryDirection?: { x: number; y: number; z: number };
  entryPointPos?: { x: number; y: number; z: number };
  entryPointDir?: { x: number; y: number; z: number; w: number };
  animationName?: string;
  isInSmartObject?: boolean;
}
