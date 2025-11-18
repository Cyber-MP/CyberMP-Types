export interface gameJournalEntryStateChangeDelayData {
  entryPath?: gameJournalPath;
  entryType?: string;
  oldState?: gameJournalEntryState;
  newState?: gameJournalEntryState;
  notifyOption?: JournalNotifyOption;
  changeType?: JournalChangeType;
  delay?: number;
}
