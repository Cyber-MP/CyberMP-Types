export abstract class scnSceneGraphNode extends ISerializable {
  nodeId?: scnNodeId;
  ffStrategy?: scnFastForwardStrategy;
  outputSockets?: scnOutputSocket[];
}
