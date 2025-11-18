export class animAnimNode_FloorIkBase extends animAnimNode_OnePoseInput {
  requiredAnimEvent?: string;
  blockAnimEvent?: string;
  canBeDisabledDueToFrameRate?: boolean;
  useFixedVersion?: boolean;
  slopeAngleDamp?: number;
  common?: animSBehaviorConstraintNodeFloorIKCommonData;
}
