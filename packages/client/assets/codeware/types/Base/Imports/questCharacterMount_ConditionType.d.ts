export class questCharacterMount_ConditionType extends questICharacterConditionType {
  anyParent?: boolean;
  parentRef?: EntityReference;
  parentIsPlayer?: boolean;
  anyChild?: boolean;
  childRef?: EntityReference;
  childIsPlayer?: boolean;
  condition?: questMountConditionType;
  enterAnimationFinished?: boolean;
  role?: gameMountingSlotRole;
  usePlayersVehicle?: boolean;
  playerVehicleName?: string;
  vehicleType?: questMountVehicleType;
  vehicleOrigin?: questMountVehicleOrigin;
  vehicleAfiliation?: gamedataAffiliation;
}
