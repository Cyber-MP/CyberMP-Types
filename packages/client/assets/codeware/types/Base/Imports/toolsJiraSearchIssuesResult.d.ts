export class toolsJiraSearchIssuesResult extends ISerializable {
  startAt?: number;
  maxResults?: number;
  total?: number;
  issues?: toolsJiraIssue[];
  errorMessages?: string[];
  warningMessages?: string[];
}
