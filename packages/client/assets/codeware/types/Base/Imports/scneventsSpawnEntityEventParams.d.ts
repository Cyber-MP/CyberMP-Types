export interface scneventsSpawnEntityEventParams {
  performer?: scnPerformerId;
  referencePerformer?: scnPerformerId;
  referencePerformerSlotId?: TweakDBID;
  referencePerformerItemId?: TweakDBID;
  fallbackData?: scneventsSpawnEntityEventFallbackData[];
}
