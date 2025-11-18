export class scnChoiceNodeNsAdaptiveLookAtParams extends scnChoiceNodeNsLookAtParams {
  nearbySlotName?: string;
  distantSlotName?: string;
  blendLimit?: number;
  referencePointFullEffectAngle?: number;
  referencePointNoEffectAngle?: number;
  referencePointFullEffectDistance?: number;
  referencePointNoEffectDistance?: number;
  referencePoints?: scnChoiceNodeNsAdaptiveLookAtReferencePoint[];
  auxiliaryRelativePoint?: { x: number; y: number; z: number };
}
