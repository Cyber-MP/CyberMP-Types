export interface rendRenderParticleUpdaterData {
  modifOffset?: number;
  animFrameInit?: number[];
  turbulenceNoiseInterval?: number;
  turbulenceDuration?: number;
  collisionMask?: bigint;
  collisionDynamicFriction?: number;
  collisionStaticFriction?: number;
  collisionRestitution?: number;
  collisionVelocityDamp?: number;
  collisionDisableGravity?: boolean;
  collisionRadius?: number;
  collisionEffectMask?: number;
  maxCollisions?: number;
  eventGenerate?: string;
  eventReceive?: string;
  eventFrequency?: number;
  eventProbability?: number;
  noiseType?: number;
  randomPerChannel?: boolean;
  eventSpawnObject?: number;
}
