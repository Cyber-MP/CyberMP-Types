export class animAnimNode_StaticSwitch extends animAnimNode_MotionTableSwitch {
  condition?: animIStaticCondition;
  motionProvider?: animIMotionTableProvider;
  True?: animPoseLink;
  False?: animPoseLink;
}
