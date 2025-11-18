export class gamedataVariableNode extends gamedataDataNode {
  hashedName?: string;
  type?: string;
  name?: string;
  isForeignKey?: boolean;
  isArray?: boolean;
  hasArrayValues?: boolean;
  isAddition?: boolean;
  typeEnum?: gamedataTweakDBType;
  values?: gamedataVariableNodeVariableValue[];
}
