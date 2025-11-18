export class animRig extends CResource {
  boneNames?: string[];
  trackNames?: string[];
  rigExtraTracks?: animFloatTrackInfo[];
  levelOfDetailStartIndices?: number[];
  distanceCategoryToLodMap?: number[];
  turnOffLOD?: number;
  turningOffUpdateAndSample?: boolean;
  referenceTracks?: number[];
  referencePoseMS?: QsTransform[];
  aPoseLS?: QsTransform[];
  aPoseMS?: QsTransform[];
  tags?: redTagList;
  parts?: animRigPart[];
  retargets?: animRigRetarget[];
  ikSetups?: animIRigIkSetup[];
  ragdollDesc?: physicsRagdollBodyInfo[];
  ragdollNames?: physicsRagdollBodyNames[];
}
