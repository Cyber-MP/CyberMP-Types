export class JournalPointOfInterestMappin extends JournalEntry {
  staticNodeRef?: string;
  dynamicEntityRef?: EntityReference;
  securityAreaRef?: string;
  mappinData?: PointOfInterestMappinData;
  offset?: { x: number; y: number; z: number };
  questPath?: gameJournalPath;
  recommendedLevelID?: TweakDBID;
  notificationTriggerAreaRef?: string;
}
