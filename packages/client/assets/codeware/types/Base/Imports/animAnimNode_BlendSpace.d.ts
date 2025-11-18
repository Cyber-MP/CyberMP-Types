export class animAnimNode_BlendSpace extends animAnimNode_Base {
  inputLinks?: animFloatLink[];
  blendSpace?: animAnimNode_BlendSpace_InternalsBlendSpace;
  progressLink?: animFloatLink;
  fireAnimEndEvent?: boolean;
  animEndEventName?: string;
  isLooped?: boolean;
}
