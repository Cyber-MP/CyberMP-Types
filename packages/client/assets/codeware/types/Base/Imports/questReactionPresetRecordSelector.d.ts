export class questReactionPresetRecordSelector extends ISerializable {
  setDefault?: boolean;
  isGanger?: boolean;
  gangerRecordID?: TweakDBID;
  isCivilian?: boolean;
  civilianRecordID?: TweakDBID;
  isCorpo?: boolean;
  corpoRecordID?: TweakDBID;
  isPolice?: boolean;
  policeRecordID?: TweakDBID;
  isMechanical?: boolean;
  mechanicalRecordID?: TweakDBID;
  isNoReaction?: boolean;
  noReactionRecordID?: TweakDBID;
}
