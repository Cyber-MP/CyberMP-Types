export class animDangleConstraint_SimulationSpring extends animDangleConstraint_SimulationSingleBone {
  constraintSphereRadius?: number;
  constraintScale1?: number;
  constraintScale2?: number;
  mass?: number;
  damping?: number;
  pullForceFactor?: number;
  externalForceWS?: { x: number; y: number; z: number };
  externalForceWsLink?: animVectorLink;
  collisionSphereRadius?: number;
  invertedMass?: number;
  simulationFps?: number;
  gravityWS?: number;
  pullForceOriginLS?: { x: number; y: number; z: number };
  projectionType?: animSpringProjectionType;
  constraintOrientation?: { x: number; y: number };
  cosOfHalfXAngle?: number;
  cosOfHalfYAngle?: number;
  sinOfHalfXAngle?: number;
  sinOfHalfYAngle?: number;
}
