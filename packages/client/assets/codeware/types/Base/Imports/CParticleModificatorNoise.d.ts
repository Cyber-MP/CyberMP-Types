export class CParticleModificatorNoise extends IParticleModificator {
  amplitude?: IEvaluatorVector;
  offset?: IEvaluatorVector;
  frequency?: IEvaluatorVector;
  changeRate?: { x: number; y: number; z: number };
  applyToPosition?: boolean;
  worldSpaceOffset?: boolean;
  noiseType?: ENoiseType;
}
