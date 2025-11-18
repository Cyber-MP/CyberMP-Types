export class animAnimNode_DampVector extends animAnimNode_VectorValue {
  defaultIncreaseSpeed?: { x: number; y: number; z: number; w: number };
  defaultDecreaseSpeed?: { x: number; y: number; z: number; w: number };
  startFromDefaultValue?: boolean;
  defaultInitialValue?: { x: number; y: number; z: number; w: number };
  inputNode?: animVectorLink;
  increaseSpeedNode?: animVectorLink;
  decreaseSpeedNode?: animVectorLink;
}
