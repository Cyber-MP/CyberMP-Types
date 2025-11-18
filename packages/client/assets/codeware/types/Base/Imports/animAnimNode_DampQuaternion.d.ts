export class animAnimNode_DampQuaternion extends animAnimNode_QuaternionValue {
  defaultRotationSpeed?: number;
  defaultInitialValue?: { roll: number; pitch: number; yaw: number };
  inputNode?: animQuaternionLink;
  initialValueNode?: animQuaternionLink;
  rotationSpeedNode?: animFloatLink;
}
