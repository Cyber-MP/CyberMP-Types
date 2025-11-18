export class animDyngConstraintCone extends animIDyngConstraint {
  constrainedBone?: animTransformIndex;
  coneAttachmentBone?: animTransformIndex;
  coneTransformLS?: QsTransform;
  constraintType?: animPendulumConstraintType;
  halfOfMaxApertureAngle?: number;
  projectionType?: animPendulumProjectionType;
  collisionCapsuleRadius?: number;
  collisionCapsuleHeightExtent?: number;
}
