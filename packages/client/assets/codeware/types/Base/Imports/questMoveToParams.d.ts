export class questMoveToParams extends AICommandParams {
  movementTargetRef?: questUniversalRef;
  facingTargetRef?: questUniversalRef;
  rotateEntityTowardsFacingTarget?: boolean;
  movementType?: moveMovementType;
  ignoreNavigation?: boolean;
  useStart?: boolean;
  useStop?: boolean;
  desiredDistanceFromTarget?: number;
  finishWhenDestinationReached?: boolean;
  repeatCommandOnInterrupt?: boolean;
  executeWhileDespawned?: boolean;
  removeAfterCombat?: boolean;
  ignoreInCombat?: boolean;
  alwaysUseStealth?: boolean;
}
