export class CParticleInitializerSpawnSphere extends IParticleInitializer {
  innerRadius?: IEvaluatorFloat;
  outerRadius?: IEvaluatorFloat;
  surfaceOnly?: boolean;
  spawnPositiveX?: boolean;
  spawnNegativeX?: boolean;
  spawnPositiveY?: boolean;
  spawnNegativeY?: boolean;
  spawnPositiveZ?: boolean;
  spawnNegativeZ?: boolean;
  velocity?: boolean;
  worldSpace?: boolean;
  forceScale?: IEvaluatorFloat;
}
