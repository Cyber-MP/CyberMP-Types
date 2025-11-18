export class questVehicleSpawned_ConditionType extends questIVehicleConditionType {
  vehicleType?: questSpawnedVehicleType;
  vehicleRef?: EntityReference;
  count?: number;
  comparisonType?: EComparisonType;
  vehicleName?: string;
  vehicleGlobalName?: string;
}
