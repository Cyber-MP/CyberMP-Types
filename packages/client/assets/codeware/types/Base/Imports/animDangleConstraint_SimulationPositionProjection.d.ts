export class animDangleConstraint_SimulationPositionProjection extends animDangleConstraint_SimulationSingleBone {
  collisionCapsuleRadius?: number;
  collisionCapsuleHeightExtent?: number;
  collisionCapsuleAxisLS?: { x: number; y: number; z: number };
  directionReferenceBone?: animTransformIndex;
  projectionType?: animPositionProjectionType;
}
