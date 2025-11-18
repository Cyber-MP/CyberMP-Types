export class animAnimNode_BlendMultiple extends animAnimNode_Base {
  inputValues?: number[];
  sortedInputValues?: number[];
  minWeight?: number;
  maxWeight?: number;
  radialBlending?: boolean;
  timeWarpingEnabled?: boolean;
  syncMethod?: animISyncMethod;
  motionProvider?: animIMotionTableProvider;
  weightNode?: animFloatLink;
  inputNodes?: animPoseLink[];
}
