export class scneventsVFXEvent extends scnSceneEvent {
  effectEntry?: scnEffectEntry;
  action?: scneventsVFXActionType;
  sequenceShift?: number;
  performerId?: scnPerformerId;
  nodeRef?: string;
  muteSound?: boolean;
}
