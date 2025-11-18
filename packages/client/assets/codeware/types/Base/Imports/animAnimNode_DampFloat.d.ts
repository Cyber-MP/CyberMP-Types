export class animAnimNode_DampFloat extends animAnimNode_FloatValue {
  defaultIncreaseSpeed?: number;
  defaultDecreaseSpeed?: number;
  startFromDefaultValue?: boolean;
  defaultInitialValue?: number;
  wrapAroundRange?: boolean;
  rangeMin?: number;
  rangeMax?: number;
  inputNode?: animFloatLink;
  increaseSpeedNode?: animFloatLink;
  decreaseSpeedNode?: animFloatLink;
}
