export class animAnimNode_FloatComparator extends animAnimNode_FloatValue {
  firstValue?: number;
  secondValue?: number;
  trueValue?: number;
  falseValue?: number;
  operation?: animEAnimGraphCompareFunc;
  firstInputLink?: animFloatLink;
  secondInputLink?: animFloatLink;
  trueInputLink?: animFloatLink;
  falseInputLink?: animFloatLink;
}
