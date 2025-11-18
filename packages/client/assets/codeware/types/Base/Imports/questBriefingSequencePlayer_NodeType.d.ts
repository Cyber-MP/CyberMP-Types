export class questBriefingSequencePlayer_NodeType extends questIUIManagerNodeType {
  function?: questBriefingSequencePlayerFunction;
  briefingResource?: ResourceAsyncRef;
  userData?: inkUserData;
  audioEvent?: string;
  animationName?: string;
  startMarkerName?: string;
  endMarkerName?: string;
  loopType?: inkanimLoopType;
  briefingPlayerType?: questBriefingPlayerType;
  briefingType?: questBriefingType;
  enableScanner?: boolean;
}
