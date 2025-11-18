export class animAnimNode_TranslateBone extends animAnimNode_Base {
  inputNode?: animPoseLink;
  inputTranslation?: animVectorLink;
  scale?: { x: number; y: number; z: number; w: number };
  biasValue?: { x: number; y: number; z: number; w: number };
  bone?: animTransformIndex;
  useIncrementalMode?: boolean;
  resetOnActivation?: boolean;
}
