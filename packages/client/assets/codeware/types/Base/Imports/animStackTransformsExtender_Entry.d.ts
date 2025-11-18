export interface animStackTransformsExtender_Entry {
  transformInfo?: animTransformInfo;
  snapMethod?: animStackTransformsExtender_SnapToBoneMethod;
  snapToReference?: boolean;
  snapTargetBone?: animTransformIndex;
  offsetToReference?: boolean;
  offsetSpaceBone?: animTransformIndex;
  offset?: QsTransform;
}
