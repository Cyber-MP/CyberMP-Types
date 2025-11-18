export class scneventsMountEvent extends scnSceneEvent {
  parent?: scnPerformerId;
  child?: scnPerformerId;
  slotName?: string;
  carryStyle?: gamePSMBodyCarryingStyle;
  isInstant?: boolean;
  removePitchRollRotationOnDismount?: boolean;
  keepTransform?: boolean;
  isCarrying?: boolean;
  switchRenderPlane?: boolean;
}
