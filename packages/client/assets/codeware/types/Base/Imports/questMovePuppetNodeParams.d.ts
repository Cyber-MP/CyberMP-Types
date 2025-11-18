export class questMovePuppetNodeParams extends AICommandParams {
  moveType?: questMoveType;
  moveOnSplineParams?: questMoveOnSplineParams;
  moveToParams?: questMoveToParams;
  otherParams?: AICommandParams;
  repeatCommandOnInterrupt?: boolean;
}
