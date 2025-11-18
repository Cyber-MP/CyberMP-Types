export class animBoneTraceCondition extends ISerializable {
  boneIndex?: number;
  traceByRotation?: boolean;
  rotationAngleTolerance?: number;
  traceByTranslation?: boolean;
  translationTolerance?: number;
}
