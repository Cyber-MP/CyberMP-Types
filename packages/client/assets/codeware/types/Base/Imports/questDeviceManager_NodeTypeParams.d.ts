export class questDeviceManager_NodeTypeParams extends ISerializable {
  objectRef?: string;
  slotName?: string;
  entityRef?: EntityReference;
  deviceControllerClass?: string;
  deviceAction?: string;
  actionProperties?: questDeviceManager_ActionProperty[];
}
