export class questOverrideLoadingScreen_NodeType extends questIUIManagerNodeType {
  video?: ResourceAsyncRef;
  videos?: ResourceAsyncRef[];
  minimumPlayCount?: number;
  forceVideoFrameRate?: boolean;
  tooltips?: string[];
  tooltipDuration?: number;
  glitchEffectTime?: number;
  keepLoadingScreenWhileVideoIsPlaying?: boolean;
}
