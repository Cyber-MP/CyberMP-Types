export class AIbehaviorSelectCoverTaskDefinition extends AIbehaviorTaskDefinition {
  cover?: AIArgumentMapping;
  coverID?: AIArgumentMapping;
  multiCoverID?: AIArgumentMapping;
  combatTarget?: AIArgumentMapping;
  friendlyTarget?: AIArgumentMapping;
  combatZone?: AIArgumentMapping;
  sectorSelection?: string;
  ignoreRestrictMovementArea?: AIArgumentMapping;
  selectionPreset?: AIArgumentMapping;
  onActivationSelectionPreset?: AIArgumentMapping;
  secondStagePreset?: AIArgumentMapping;
  coverChangeThreshold?: AIArgumentMapping;
  coverGatheringCenterObject?: AIArgumentMapping;
  coverDisablingDuration?: AIArgumentMapping;
}
