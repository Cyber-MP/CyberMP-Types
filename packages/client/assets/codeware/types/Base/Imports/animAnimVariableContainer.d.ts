export class animAnimVariableContainer extends ISerializable {
  boolVariables?: animAnimVariableBool[];
  intVariables?: animAnimVariableInt[];
  floatVariables?: animAnimVariableFloat[];
  vectorVariables?: animAnimVariableVector[];
  quaternionVariables?: animAnimVariableQuaternion[];
  transformVariables?: animAnimVariableTransform[];
}
