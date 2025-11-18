export class questCallContact_NodeType extends questIPhoneManagerNodeType {
  caller?: gameJournalPath;
  addressee?: gameJournalPath;
  phase?: questPhoneCallPhase;
  mode?: questPhoneCallMode;
  prefabNodeRef?: string;
  applyPhoneRestriction?: boolean;
  isRejectable?: boolean;
  showAvatar?: boolean;
  visuals?: questPhoneCallVisuals;
}
