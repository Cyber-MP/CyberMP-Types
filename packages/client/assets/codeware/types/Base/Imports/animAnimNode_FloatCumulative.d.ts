export class animAnimNode_FloatCumulative extends animAnimNode_FloatValue {
  clamp?: boolean;
  resetOnActivation?: boolean;
  normalize180?: boolean;
  defaultValue?: number;
  resetExternalEventName?: string;
  inputNode?: animFloatLink;
  minValue?: animFloatLink;
  maxValue?: animFloatLink;
  resetSpeed?: animFloatLink;
  override?: animBoolLink;
  curValue?: animFloatLink;
  normalize180Input?: animBoolLink;
}
