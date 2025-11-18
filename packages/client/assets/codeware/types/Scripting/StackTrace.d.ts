export interface StackTraceEntry {
  class?: string;
  function?: string;
  object?: wref;
}

export declare function GetStackTrace(depth?: number, current?: boolean): StackTraceEntry[];
