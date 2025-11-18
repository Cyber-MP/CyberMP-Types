export class scneventsAttachPropToPerformer extends scnSceneEvent {
  propId?: scnPropId;
  performerId?: scnPerformerId;
  slot?: string;
  offsetMode?: scnOffsetMode;
  customOffsetPos?: { x: number; y: number; z: number };
  customOffsetRot?: { i: number; j: number; k: number; r: number };
  fallbackData?: scneventsAttachPropToPerformerFallbackData[];
}
