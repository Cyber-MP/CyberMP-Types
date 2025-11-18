export interface scnMarker {
  type?: scnMarkerType;
  localMarkerId?: string;
  nodeRef?: string;
  entityRef?: EntityReference;
  slotName?: string;
  isMounted?: boolean;
}
