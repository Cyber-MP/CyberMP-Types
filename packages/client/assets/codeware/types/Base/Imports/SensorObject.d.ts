export class SensorObject extends ISerializable {
  presetID?: TweakDBID;
  detectionFactor?: number;
  detectionDropFactor?: number;
  detectionCoolDownTime?: number;
  detectionPartCoolDownTime?: number;
  hearingEnabled?: boolean;
  sensorObjectType?: gamedataSenseObjectType;
}
