export class animAnimNode_DirectConnConstraint extends animAnimNode_OnePoseInput {
  sourceTransform?: animIAnimNodeSourceChannel_QsTransform;
  isSourceTransformResaved?: boolean;
  sourceTransformIndex?: animTransformIndex;
  transformIndex?: animTransformIndex;
  posX?: boolean;
  posY?: boolean;
  posZ?: boolean;
  rotX?: boolean;
  rotY?: boolean;
  rotZ?: boolean;
  scaleX?: boolean;
  scaleY?: boolean;
  scaleZ?: boolean;
  weight?: number;
  weightNode?: animFloatLink;
}
