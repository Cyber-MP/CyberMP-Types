export class worldInspectorNodeInstanceProperties extends ISerializable {
  setupInfo?: worldCompiledNodeInstanceSetupInfo;
  meshNode?: worldMeshNode;
  instancedMeshNode?: worldInstancedMeshNode;
  lastObserverDistanceToStreamingPoint?: number;
  lastObserverDistanceToSecondaryReferencePoint?: number;
  renderProxyAddressForDebug?: bigint;
}
