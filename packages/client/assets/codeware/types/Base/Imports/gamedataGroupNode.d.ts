export class gamedataGroupNode extends gamedataDataNode {
  name?: string;
  base?: string;
  schema?: string;
  isInline?: boolean;
  baseGroup?: wref;
  schemaGroup?: wref;
  package?: wref;
  fileNode?: gamedataFileNode;
  inlineGroupId?: number;
  inheritanceState?: gamedataGroupNodeInheritanceState;
  serializedVariables?: gamedataGroupNodeGroupVariable[];
  tags?: string[];
}
