export interface animStackTransformsExtender_JsonEntry {
  name?: string;
  parentName?: string;
  referenceTransformLs?: QsTransform;
  snapMethod?: animStackTransformsExtender_SnapToBoneMethod;
  snapToReference?: boolean;
  snapTargetBone?: string;
  offsetToReference?: boolean;
  offsetSpaceBone?: string;
  offset?: QsTransform;
}
