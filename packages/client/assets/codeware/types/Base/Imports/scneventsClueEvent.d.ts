export class scneventsClueEvent extends scnSceneEvent {
  clueEntity?: EntityReference;
  markedOnTimeline?: boolean;
  clueName?: string;
  layer?: gameuiEBraindanceLayer;
  overrideFact?: boolean;
  factName?: string;
}
