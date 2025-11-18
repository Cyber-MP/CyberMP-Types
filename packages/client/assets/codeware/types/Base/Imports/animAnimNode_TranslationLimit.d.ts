export class animAnimNode_TranslationLimit extends animAnimNode_OnePoseInput {
  constrainedTransform?: animTransformIndex;
  parentTransform?: animTransformIndex;
  limitOnXAxis?: animFloatClamp;
  limitOnYAxis?: animFloatClamp;
  limitOnZAxis?: animFloatClamp;
}
