export class scneventsAttachPropToWorld extends scnSceneEvent {
  propId?: scnPropId;
  offsetMode?: scnOffsetMode;
  customOffsetPos?: { x: number; y: number; z: number };
  customOffsetRot?: { i: number; j: number; k: number; r: number };
  referencePerformer?: scnPerformerId;
  referencePerformerSlotId?: TweakDBID;
  referencePerformerItemId?: TweakDBID;
  fallbackData?: scneventsAttachPropToWorldFallbackData[];
}
