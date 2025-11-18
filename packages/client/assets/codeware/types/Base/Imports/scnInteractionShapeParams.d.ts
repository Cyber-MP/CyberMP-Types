export class scnInteractionShapeParams extends ISerializable {
  preset?: scnChoiceNodeNsSizePreset;
  offset?: { x: number; y: number; z: number };
  rotation?: { i: number; j: number; k: number; r: number };
  customIndicationRange?: number;
  customActivationRange?: number;
  activationYawLimit?: number;
  activationBaseLength?: number;
  activationHeight?: number;
}
