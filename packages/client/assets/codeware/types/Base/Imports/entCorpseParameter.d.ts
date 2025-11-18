export class entCorpseParameter extends entEntityParameter {
  lod?: number;
  bakedPose?: QsTransform[];
  bakedBoneNames?: string[];
  forceLOD0Components?: string[];
  baseRig?: ResourceAsyncRef;
}
