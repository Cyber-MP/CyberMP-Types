export class animAnimNode_ParentConstraint extends animAnimNode_OnePoseInput {
  parentTransform?: animIAnimNodeSourceChannel_QsTransform;
  isParentTransformResaved?: boolean;
  parentTransformIndex?: animTransformIndex;
  transformIndex?: animTransformIndex;
  interpolationType?: animEInterpolationType;
  weight?: number;
  weightFloatTrack?: animNamedTrackIndex;
  useBoneReferencePoseAsDefaultOffset?: boolean;
  weightNode?: animFloatLink;
  offsetTranslationLS?: animVectorLink;
  offsetEulerRotationLS?: animVectorLink;
}
