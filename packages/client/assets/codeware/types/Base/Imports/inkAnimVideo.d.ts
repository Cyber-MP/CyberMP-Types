export class inkAnimVideo extends inkAnimInterpolator {
  startValue?: number;
  endValue?: number;
  synchronizeToAudio?: boolean;
  allowSkipBackward?: boolean;
  audioEvent?: string;
  retriggerAudioOnLoop?: boolean;
}
