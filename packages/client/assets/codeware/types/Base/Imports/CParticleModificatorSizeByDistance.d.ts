export class CParticleModificatorSizeByDistance extends IParticleModificator {
  nearDistanceRangeStart?: IEvaluatorFloat;
  nearDistanceRangeEnd?: IEvaluatorFloat;
  nearDistanceSizeMultiplier?: IEvaluatorFloat;
  farDistanceRangeStart?: IEvaluatorFloat;
  farDistanceRangeEnd?: IEvaluatorFloat;
  farDistanceSizeMultiplier?: IEvaluatorFloat;
}
