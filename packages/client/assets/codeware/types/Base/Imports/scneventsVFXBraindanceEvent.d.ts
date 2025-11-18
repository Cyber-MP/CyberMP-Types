export class scneventsVFXBraindanceEvent extends scnSceneEvent {
  performerId?: scnPerformerId;
  nodeRef?: string;
  effectEntry?: scnEffectEntry;
  sequenceShift?: number;
  glitchEffectEntry?: scnEffectEntry;
  glitchSequenceShift?: number;
  fullyRewindable?: boolean;
}
