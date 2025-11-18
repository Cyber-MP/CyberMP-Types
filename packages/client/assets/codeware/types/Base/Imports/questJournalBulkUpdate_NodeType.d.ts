export class questJournalBulkUpdate_NodeType extends questIJournal_NodeType {
  path?: gameJournalPath;
  requiredEntryType?: string;
  requiredEntryState?: string;
  newEntryState?: string;
  sendNotification?: boolean;
  propagateChange?: boolean;
}
