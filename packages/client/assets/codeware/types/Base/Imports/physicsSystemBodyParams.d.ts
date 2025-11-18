export interface physicsSystemBodyParams {
  simulationType?: physicsSimulationType;
  linearDamping?: number;
  angularDamping?: number;
  solverIterationsCountPosition?: number;
  solverIterationsCountVelocity?: number;
  maxDepenetrationVelocity?: number;
  maxAngularVelocity?: number;
  maxContactImpulse?: number;
  mass?: number;
  inertia?: { x: number; y: number; z: number };
  comOffset?: Transform;
}
