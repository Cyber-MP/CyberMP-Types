export interface physicsclothRuntimeInfo {
  translation?: { x: number; y: number; z: number };
  rotation?: { i: number; j: number; k: number; r: number };
  gravity?: { x: number; y: number; z: number };
  damping?: number;
  drag?: number;
  inertia?: number;
  numSolverIterations?: number;
  stiffnessFrequency?: number;
  friction?: number;
  tetherStiffness?: number;
  tetherScale?: number;
  selfCollisionDistance?: number;
  selfCollisionStiffness?: number;
  liftCoefficient?: number;
  dragCoefficient?: number;
  gravityScale?: number;
  motionConstraintStiffness?: number;
  enableSelfCollision?: boolean;
}
