export class animAnimNode_SpringDamp extends animAnimNode_FloatValue {
  massFactor?: number;
  springFactor?: number;
  dampFactor?: number;
  startFromDefaultValue?: boolean;
  defaultInitialValue?: number;
  wrapAroundRange?: boolean;
  rangeMin?: number;
  rangeMax?: number;
  timeStep?: number;
  inputNode?: animFloatLink;
}
