export class questEntityManagerSetAttachment_ToWorld extends questIEntityManagerSetAttachment_NodeSubType {
  attachmentRef?: string;
  offsetMode?: questAttachmentOffsetMode;
  customOffsetPos?: { x: number; y: number; z: number };
  customOffsetRot?: { i: number; j: number; k: number; r: number };
}
