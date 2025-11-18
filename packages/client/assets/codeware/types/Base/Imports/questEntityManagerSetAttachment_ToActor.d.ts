export class questEntityManagerSetAttachment_ToActor extends questIEntityManagerSetAttachment_NodeSubType {
  attachmentRef?: string;
  objectRef?: EntityReference;
  isPlayer?: boolean;
  slot?: string;
  offsetMode?: questAttachmentOffsetMode;
  customOffsetPos?: { x: number; y: number; z: number };
  customOffsetRot?: { i: number; j: number; k: number; r: number };
}
