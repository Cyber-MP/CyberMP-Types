export class questFollowParams extends AICommandParams {
  companionRef?: questUniversalRef;
  companionDistance?: number;
  destinationPointTolerance?: number;
  stopWhenDestinationReached?: boolean;
  movementType?: moveMovementType;
  matchSpeed?: boolean;
  useTeleport?: boolean;
  repeatCommandOnInterrupt?: boolean;
}
