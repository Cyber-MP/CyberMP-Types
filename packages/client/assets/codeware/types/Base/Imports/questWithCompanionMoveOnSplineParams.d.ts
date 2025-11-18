export interface questWithCompanionMoveOnSplineParams {
  movementType?: AIMovementTypeSpec;
  facingTargetRef?: questUniversalRef;
  rotateEntityTowardsFacingTarget?: boolean;
  snapToTerrain?: boolean;
  shootingTargetRef?: questUniversalRef;
  companionRef?: questUniversalRef;
  companionDistancePreset?: gamedataCompanionDistancePreset;
  companionPosition?: questCompanionPositions;
  catchUpWithCompanion?: boolean;
  teleportToCompanion?: boolean;
  useMatchForSpeedForPlayer?: boolean;
  ignoreNavigation?: boolean;
  ignoreLineOfSightCheck?: boolean;
  useOffMeshLinkReservation?: boolean;
  lookAtTargetRef?: questUniversalRef;
  minSearchAngle?: number;
  maxSearchAngle?: number;
  interruptCapability?: scnInterruptCapability;
  maxCompanionDistanceOnSpline?: number;
}
