import type * as CyberEnums from '../enums';

export interface MpVoiceChat {
  enable(state: boolean): void;

  changeActivationType(type: CyberEnums.EVoiceActivationType): void;
  bindPushToTalkKey(key: number | CyberEnums.EInputKey): void;

  setOutputVolume(value: number): void;
  setInputVolume(value: number): void;
  setMicrophoneSensitivity(value: number): void;

  getOutputDevices(): string[];
  getInputDevices(): string[];

  setOutputDevice(index: number): void;
  setInputDevice(index: number): void;

  setVoiceInputDistance(distance: number): void;
  setVoiceOutputDistance(distance: number): void;

  isActive(): boolean;
}
