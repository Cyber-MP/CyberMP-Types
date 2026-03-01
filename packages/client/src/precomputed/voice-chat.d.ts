import * as CyberEnums from '../enums';

declare global {
  interface MpVoiceChat {
    enable(state: boolean): void;
    changeActivationType(type: CyberEnums.VoiceActivationType): void;
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
}
