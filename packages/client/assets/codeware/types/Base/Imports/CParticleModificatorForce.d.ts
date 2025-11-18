export class CParticleModificatorForce extends IParticleModificator {
  pivot?: { x: number; y: number; z: number };
  radius?: number;
  scale?: IEvaluatorFloat;
  damp?: IEvaluatorVector;
}
