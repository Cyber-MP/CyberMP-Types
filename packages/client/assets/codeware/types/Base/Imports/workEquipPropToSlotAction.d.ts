export class workEquipPropToSlotAction extends workIWorkspotItemAction {
  itemId?: string;
  itemSlot?: TweakDBID;
  attachMethod?: workPropAttachMethod;
  customOffsetPos?: { x: number; y: number; z: number };
  customOffsetRot?: { i: number; j: number; k: number; r: number };
}
