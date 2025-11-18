export class questHUDVideo_NodeType extends questIUIManagerNodeType {
  video?: ResourceAsyncRef;
  skippable?: boolean;
  audioEvent?: string;
  syncToAudio?: boolean;
  retriggerAudioOnLoop?: boolean;
  looped?: boolean;
  forceVideoFrameRate?: boolean;
  playOnHud?: boolean;
  fullScreen?: boolean;
  useFullscreenVideoState?: boolean;
  keepWidescreenAspectRatio?: boolean;
  position?: { x: number; y: number };
  size?: { x: number; y: number };
}
