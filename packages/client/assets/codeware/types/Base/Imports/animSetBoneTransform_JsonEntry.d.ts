export interface animSetBoneTransform_JsonEntry {
  transformToChange?: string;
  setMethod?: animSetBoneTransformEntry_SetMethod;
  snapToReference?: boolean;
  sourceBone?: string;
  offsetToReference?: boolean;
  offsetSpaceBone?: string;
  offset?: QsTransform;
}
