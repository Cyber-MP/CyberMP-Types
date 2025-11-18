export class CParticleInitializerSpawnCircle extends IParticleInitializer {
  innerRadius?: IEvaluatorFloat;
  outerRadius?: IEvaluatorFloat;
  surfaceOnly?: boolean;
  worldSpace?: boolean;
  spawnToLocal?: Matrix;
}
