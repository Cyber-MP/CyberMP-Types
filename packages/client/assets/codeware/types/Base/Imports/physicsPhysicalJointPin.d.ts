export class physicsPhysicalJointPin extends ISerializable {
  object?: physicsISystemObject;
  featureIndex?: number;
  localPosition?: { x: number; y: number; z: number };
  localRotation?: { i: number; j: number; k: number; r: number };
}
