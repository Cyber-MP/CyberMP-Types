export interface audioVehicleWheelData {
  wheelStartEvents?: string[];
  wheelStopEvents?: string[];
  wheelRegularSuspensionImpacts?: string[];
  wheelLandingSuspensionImpacts?: string[];
  suspensionPressureMultiplier?: number;
  landingSuspensionPressureMultiplier?: number;
  suspensionPressureLimit?: number;
  minSuspensionPressureThreshold?: number;
  suspensionImpactCooldown?: number;
  minWheelTimeInAirBeforeLanding?: number;
}
