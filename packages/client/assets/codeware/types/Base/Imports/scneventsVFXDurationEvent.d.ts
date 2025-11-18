export class scneventsVFXDurationEvent extends scnSceneEvent {
  effectEntry?: scnEffectEntry;
  startAction?: scneventsVFXActionType;
  endAction?: scneventsVFXActionType;
  sequenceShift?: number;
  performerId?: scnPerformerId;
  nodeRef?: string;
  muteSound?: boolean;
}
