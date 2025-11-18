export interface toolsMessage {
  severity?: toolsMessageSeverity;
  created?: bigint;
  location?: toolsIMessageLocation;
  tokens?: toolsIMessageToken[];
  verbosity?: toolsMessageVerbosity;
}
