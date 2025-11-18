export class scnEventBlendWorkspotSetupParameters extends ISerializable {
  workspotId?: scnSceneWorkspotInstanceId;
  sequenceEntryId?: WorkEntryId;
  idleOnlyMode?: boolean;
  workExcludedGestures?: WorkEntryId[];
  itemOverride?: workWorkspotItemOverride;
}
