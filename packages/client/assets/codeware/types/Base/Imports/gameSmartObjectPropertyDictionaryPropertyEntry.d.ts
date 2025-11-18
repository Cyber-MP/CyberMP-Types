export interface gameSmartObjectPropertyDictionaryPropertyEntry {
  id?: number;
  usage?: number;
  animationName?: string;
  sourceAnimset?: bigint;
  type?: gameSmartObjectPointType;
  movementType?: moveMovementType;
  movementOrientation?: moveMovementOrientationType;
  isOnNavmesh?: boolean;
  isReachable?: boolean;
  overObstacle?: boolean;
}
