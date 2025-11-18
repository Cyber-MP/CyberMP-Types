export class scnPlayRidAnimEvent extends scnPlayFPPControlAnimEvent {
  ridVersinon?: number;
  animResRefId?: scnRidAnimationSRRefId;
  animOriginMarker?: scnMarker;
  actorPlacement?: scnRidActorPlacement;
  actorHasCollision?: boolean;
  blendInTrajectoryBone?: number;
}
