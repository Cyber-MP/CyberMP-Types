export abstract class worldINodeInstance extends ISerializable {
  GetNode(): worldNode;
  GetTransform(): Transform;
  GetScale(): { x: number; y: number; z: number };
  GetGlobalNodeID(): GlobalNodeID;
  GetProxyNodeID(): GlobalNodeID;
  GetStreamingDistance(): number;
}
