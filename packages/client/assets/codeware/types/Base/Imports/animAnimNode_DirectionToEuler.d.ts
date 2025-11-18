export class animAnimNode_DirectionToEuler extends animAnimNode_FloatValue {
  inputNode?: animVectorLink;
  initialForwardVector?: { x: number; y: number; z: number; w: number };
  conversionType?: animEDirectionToEuler;
}
