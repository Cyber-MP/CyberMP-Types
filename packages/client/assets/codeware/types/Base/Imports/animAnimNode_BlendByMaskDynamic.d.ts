export class animAnimNode_BlendByMaskDynamic extends animAnimNode_Base {
  base?: animPoseLink;
  blend?: animPoseLink;
  mask?: animIntLink;
  weight?: animFloatLink;
  masks?: string[];
  syncMethod?: animISyncMethod;
}
