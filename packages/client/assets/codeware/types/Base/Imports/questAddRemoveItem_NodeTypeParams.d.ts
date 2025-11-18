export class questAddRemoveItem_NodeTypeParams extends ISerializable {
  sendNotification?: boolean;
  isPlayer?: boolean;
  objectRef?: EntityReference;
  entityRef?: questUniversalRef;
  nodeType?: questEAddRemoveItemType;
  itemID?: TweakDBID;
  quantity?: number;
  flagItemAddedCallbackAsSilent?: boolean;
  removeAllQuantity?: boolean;
  tagToRemove?: string;
  itemIDsToIgnoreOnRemove?: TweakDBID[];
  tagsToIgnoreOnRemove?: string[];
}
