export abstract class gamedataDataNode extends ISerializable {
  nodeType?: gamedataDataNodeType;
  fileName?: string;
  parent?: wref;
}
