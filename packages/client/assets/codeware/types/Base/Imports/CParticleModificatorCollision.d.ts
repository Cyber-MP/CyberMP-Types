export class CParticleModificatorCollision extends IParticleModificator {
  restitution?: number;
  dynamicFriction?: number;
  staticFriction?: number;
  velocityDamp?: number;
  angularVelocityDamp?: number;
  particleMass?: number;
  particleRadius?: number;
  useGPUAcceleration?: boolean;
  disableGravity?: boolean;
  killOnCollision?: boolean;
}
