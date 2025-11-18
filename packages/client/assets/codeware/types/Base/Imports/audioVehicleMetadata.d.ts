export class audioVehicleMetadata extends audioCustomEmitterMetadata {
  generalData?: audioVehicleGeneralData;
  mechanicalData?: audioVehicleMechanicalData;
  wheelData?: audioVehicleWheelData;
  emitterPositionData?: audioVehicleEmitterPositionData;
  minRpm?: number;
  maxRpm?: number;
  vehicleCollisionSettings?: string;
  vehicleGridDestructionSettings?: string;
  vehiclePartSettings?: string;
  collisionCooldown?: number;
  maxPlayingDistance?: number;
  dopplerFactor?: number;
  suspensionSqueekTimeout?: number;
  exitDelay?: number;
  gearSweeteners?: string[];
  testWheelMaterial?: boolean;
  hasRadioReceiver?: boolean;
  usesPoliceRadioStation?: boolean;
  acousticIsolationFactor?: number;
  trafficEmitterMetadata?: string;
  radioReceiverType?: string;
  matchingStartupRadioStations?: string[];
  radioPlaysWhenEngineStartsProbability?: number;
}
