export interface gameuiHUDVideoStartEvent {
  videoPathHash?: bigint;
  playOnHud?: boolean;
  fullScreen?: boolean;
  useFullscreenVideoState?: boolean;
  keepWidescreenAspectRatio?: boolean;
  position?: { x: number; y: number };
  size?: { x: number; y: number };
  skippable?: boolean;
  isLooped?: boolean;
  forceVideoFrameRate?: boolean;
}
