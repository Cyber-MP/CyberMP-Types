export class gamedataFileNode extends gamedataDataNode {
  packageName?: string;
  packageDependencies?: any;
  package?: wref;
  variables?: gamedataVariableNode[];
  groups?: gamedataGroupNode[];
}
