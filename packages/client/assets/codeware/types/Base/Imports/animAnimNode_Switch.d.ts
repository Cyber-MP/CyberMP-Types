export class animAnimNode_Switch extends animAnimNode_MotionTableSwitch {
  numInputs?: number;
  blendTime?: number;
  timeWarpingEnabled?: boolean;
  syncMethod?: animISyncMethod;
  motionProvider?: animIMotionTableProvider;
  weightNode?: animFloatLink;
  inputNodes?: animPoseLink[];
  pushDataByTag?: string;
  canRequestInertialization?: boolean;
}
