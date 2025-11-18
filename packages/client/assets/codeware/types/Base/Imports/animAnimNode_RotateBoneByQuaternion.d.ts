export class animAnimNode_RotateBoneByQuaternion extends animAnimNode_Base {
  inputNode?: animPoseLink;
  quaternionNode?: animQuaternionLink;
  bone?: animTransformIndex;
  useIncrementalMode?: boolean;
  resetOnActivation?: boolean;
}
