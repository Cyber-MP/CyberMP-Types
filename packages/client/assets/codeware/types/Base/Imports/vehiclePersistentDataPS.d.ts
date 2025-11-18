export class vehiclePersistentDataPS extends GameComponentPS {
  flags?: number;
  autopilotPos?: number;
  autopilotCurrentSpeed?: number;
  isHackable?: boolean;
  wheelRuntimeData?: any;
  questEnforcedTransform?: Transform;
  destruction?: vehicleDestructionPSData;
  audio?: vehicleAudioPSData;
}
