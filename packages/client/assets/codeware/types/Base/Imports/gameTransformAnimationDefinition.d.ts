export interface gameTransformAnimationDefinition {
  name?: string;
  autoStart?: boolean;
  autoStartDelay?: number;
  timesToPlay?: number;
  looping?: boolean;
  timeScale?: number;
  reverse?: boolean;
  timeline?: gameTransformAnimationTimeline;
}
