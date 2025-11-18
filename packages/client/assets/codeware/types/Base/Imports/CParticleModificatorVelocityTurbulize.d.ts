export class CParticleModificatorVelocityTurbulize extends IParticleModificator {
  scale?: IEvaluatorVector;
  timelifeLimit?: IEvaluatorFloat;
  noiseInterval?: number;
  duration?: number;
  worldSpace?: boolean;
}
