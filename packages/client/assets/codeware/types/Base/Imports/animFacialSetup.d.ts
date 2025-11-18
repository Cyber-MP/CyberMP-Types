export class animFacialSetup extends CResource {
  rig?: ResourceRef;
  inputRig?: ResourceRef;
  info?: animFacialSetup_BufferInfo;
  posesInfo?: animFacialSetup_PosesBufferInfo;
  usedTransformIndices?: number[];
  useFemaleAnimSet?: boolean;
  version?: number;
}
