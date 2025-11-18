export interface animSetBoneTransformEntry {
  transformToChange?: animTransformIndex;
  setMethod?: animSetBoneTransformEntry_SetMethod;
  snapToReference?: boolean;
  sourceBone?: animTransformIndex;
  offsetToReference?: boolean;
  offsetSpaceBone?: animTransformIndex;
  offset?: QsTransform;
}
