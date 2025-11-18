export class animAnimNode_Inertialization extends animAnimNode_OnePoseInput {
  safeMode?: boolean;
  transformsCountUpperBound?: number;
  tracksCountUpperBound?: number;
  rotationLimits?: animInertializationRotationLimit[];
}
