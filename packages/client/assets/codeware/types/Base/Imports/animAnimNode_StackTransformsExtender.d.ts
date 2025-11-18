export class animAnimNode_StackTransformsExtender extends animAnimNode_OnePoseInput {
  tag?: string;
  transformInfos?: animTransformInfo[];
  snapMethods?: animStackTransformsExtender_SnapToBoneMethod[];
  snapToReferenceValues?: boolean[];
  snapTargetBones?: animTransformIndex[];
  offsetToReferenceValues?: boolean[];
  offsetSpaceBones?: animTransformIndex[];
  offsets?: QsTransform[];
}
