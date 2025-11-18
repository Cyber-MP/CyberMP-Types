export interface gameAttachmentSlotsReplicatedState {
  componentName?: string;
  enabled?: boolean;
  stateVersion?: number;
  slots?: gameAttachmentSlotReplicatedState[];
}
