export class animFacialCustomizationSet extends CResource {
  baseSetup?: ResourceRef;
  targetSetups?: ResourceAsyncRef[];
  targetSetupsTemp?: animFacialCustomizationTargetEntryTemp[];
  numTargets?: number;
  posesInfo?: animFacialSetup_PosesBufferInfo;
  jointRegions?: number[];
  usedTransformIndices?: number[];
  numJoints?: number;
  isCooked?: boolean;
}
