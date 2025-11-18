export class tempshitMapPinManagerNodeDefinition extends questDisableableNodeDefinition {
  mapPinName?: string;
  operation?: tempshitMapPinOperation;
  nodeRef?: EntityReference;
  position?: { x: number; y: number; z: number };
  forceCaption?: LocalizationString;
}
