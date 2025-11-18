export class animDangleConstraint_SimulationPendulum extends animDangleConstraint_SimulationSingleBone {
  constraintType?: animPendulumConstraintType;
  halfOfMaxApertureAngle?: number;
  mass?: number;
  damping?: number;
  pullForceFactor?: number;
  pullForceDirectionLS?: { x: number; y: number; z: number };
  externalForceWS?: { x: number; y: number; z: number };
  externalForceWsLink?: animVectorLink;
  collisionCapsuleRadius?: number;
  collisionCapsuleHeightExtent?: number;
  cosOfHalfMaxApertureAngle?: number;
  cosOfHalfOfHalfMaxApertureAngle?: number;
  sinOfHalfOfHalfMaxApertureAngle?: number;
  invertedMass?: number;
  simulationFps?: number;
  gravityWS?: number;
  projectionType?: animPendulumProjectionType;
  constraintOrientation?: { x: number; y: number; z: number };
  cosOfHalfXAngle?: number;
  cosOfHalfYAngle?: number;
  cosOfHalfZAngle?: number;
  sinOfHalfXAngle?: number;
  sinOfHalfYAngle?: number;
  sinOfHalfZAngle?: number;
}
