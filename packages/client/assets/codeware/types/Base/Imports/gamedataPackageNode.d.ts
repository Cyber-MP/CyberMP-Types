export class gamedataPackageNode extends ISerializable {
  name?: string;
  serializedVariables?: gamedataVariableNode[];
  serializedGroups?: gamedataGroupNode[];
  files?: gamedataFileNode[];
}
