export class animDyngConstraintLink extends animIDyngConstraint {
  bone1?: animTransformIndex;
  bone2?: animTransformIndex;
  linkType?: animDyngConstraintLinkType;
  lengthLowerBoundRatioPercentage?: number;
  lengthUpperBoundRatioPercentage?: number;
  lookAtAxis?: { x: number; y: number; z: number };
}
