export class animAnimNode_SkAnim extends animAnimNode_Base {
  animation?: string;
  applyMotion?: boolean;
  isLooped?: boolean;
  resume?: boolean;
  collectEvents?: boolean;
  fireAnimLoopEvent?: boolean;
  animLoopEventName?: string;
  clipFront?: number;
  clipEnd?: number;
  clipFrontByEvent?: string;
  clipEndByEvent?: string;
  pushDataByTag?: string;
  popDataByTag?: string;
  pushSafeCutTag?: string;
  convertToAdditive?: boolean;
  motionProvider?: animIMotionTableProvider;
  applyInertializationOnAnimSetSwap?: boolean;
}
