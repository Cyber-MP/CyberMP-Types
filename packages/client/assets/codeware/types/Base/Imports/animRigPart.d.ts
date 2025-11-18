export interface animRigPart {
  name?: string;
  singleBones?: animRigPartBone[];
  treeBones?: animRigPartBoneTree[];
  bonesWithRotationInModelSpace?: string[];
  mask?: animTransformMask[];
  maskRotMS?: number[];
}
