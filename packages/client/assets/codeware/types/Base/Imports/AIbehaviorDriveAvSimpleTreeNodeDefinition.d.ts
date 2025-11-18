export class AIbehaviorDriveAvSimpleTreeNodeDefinition extends AIbehaviorDriveTreeNodeDefinition {
  timeToTravel?: AIArgumentMapping;
  distanceToTravel?: AIArgumentMapping;
  useEaseInFunction?: AIArgumentMapping;
  useEaseOutFunction?: AIArgumentMapping;
  movementDirection?: AIArgumentMapping;
  useForwardDirection?: AIArgumentMapping;
  easeBounceMultiplier?: AIArgumentMapping;
  despawnAtTheEnd?: AIArgumentMapping;
  disableVFXs?: AIArgumentMapping;
  facePlayer?: AIArgumentMapping;
  doLandingRotation?: AIArgumentMapping;
  interruptTaskOnLandingFound?: AIArgumentMapping;
  attemptToSendEarlyDismountCommand?: AIArgumentMapping;
}
