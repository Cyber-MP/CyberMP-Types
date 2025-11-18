export class questCharacterState_PlayerSubType extends questICharacterConditionSubType {
  locomotionComparisonType?: questEComparisonTypeEquality;
  locomotionState?: gamePSMLocomotionStates;
  upperBodyComparisonType?: questEComparisonTypeEquality;
  upperBodyState?: gamePSMUpperBodyStates;
  weaponComparisonType?: questEComparisonTypeEquality;
  weaponState?: gamePSMRangedWeaponStates;
  timeDilationComparisonType?: questEComparisonTypeEquality;
  timeDilationState?: gamePSMTimeDilation;
  vehicleComparisonType?: questEComparisonTypeEquality;
  vehicleState?: gamePSMVehicle;
  takedownStateComparisonType?: questEComparisonTypeEquality;
  takedownState?: gamePSMTakedown;
  swimmingStateComparisonType?: questEComparisonTypeEquality;
  swimmingState?: gamePSMSwimming;
}
