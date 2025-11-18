export class questEventManagerNodeDefinition extends questDisableableNodeDefinition {
  isUiEvent?: boolean;
  isObjectPlayer?: boolean;
  objectRef?: EntityReference;
  managerName?: string;
  event?: IScriptable;
  PSClassName?: string;
  componentName?: string;
}
