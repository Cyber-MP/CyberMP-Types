export class worldEffect extends resStreamedResource {
  name?: string;
  length?: number;
  inputParameterNames?: string[];
  trackRoot?: effectTrackGroup;
  events?: effectTrackItem[];
  effectLoops?: effectLoopData[];
}
