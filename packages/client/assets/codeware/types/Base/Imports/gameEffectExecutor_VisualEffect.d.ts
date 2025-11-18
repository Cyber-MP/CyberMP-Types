export class gameEffectExecutor_VisualEffect extends EffectExecutor {
  effect?: ResourceAsyncRef;
  attached?: boolean;
  breakLoopOnDetach?: boolean;
  effectTag?: string;
  vectorEvaluator?: gameEffectVectorEvaluator;
}
