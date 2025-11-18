export class CParticleSystem extends resStreamedResource {
  visibleThroughWalls?: boolean;
  prewarmingTime?: number;
  emitters?: CParticleEmitter[];
  boundingBox?: Box;
  autoHideDistance?: number;
  autoHideRange?: number;
  lastLODFadeoutRange?: number;
  renderingPlane?: ERenderingPlane;
  particleDamage?: ParticleDamage;
}
