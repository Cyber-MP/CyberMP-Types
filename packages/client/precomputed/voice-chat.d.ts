import type * as CyberEnums from '../out/enums';

/**
 * Interface managing the integrated voice communication subsystem.
 * Provides controls for device routing, audio leveling, capture thresholds, and distance-based 3D spatial attenuation.
 */
export interface MpVoiceChat {
  /**
   * Toggles the global operational state of the voice chat system.
   * @param state - `true` to fully initialize and connect to the voice server channels, `false` to shut down capture and playback.
   */
  enable(state: boolean): void;

  /**
   * Modifies how the local microphone capture is triggered (e.g., Continuous, Voice Activity, or Push-To-Talk).
   * @param type - The target voice activation mode enumeration value.
   */
  changeActivationType(type: CyberEnums.EVoiceActivationType): void;

  /**
   * Binds a specific hardware key code or input identifier to trigger microphone transmission when using Push-To-Talk.
   * @param key - The numerical key code or explicit structural input key enum to assign.
   */
  bindPushToTalkKey(key: number | CyberEnums.EInputKey): void;

  /**
   * Sets the master playback volume level for inbound remote voice streams.
   * @param value - Volumetric multiplier factor (typically ranging from `0.0` for muted up to `1.0` or higher for boosted gain).
   */
  setOutputVolume(value: number): void;

  /**
   * Adjusts the local recording gain modification layer applied to the hardware microphone input before network broadcasting.
   * @param value - Volumetric multiplier factor (typically ranging from `0.0` to `1.0`).
   */
  setInputVolume(value: number): void;

  /**
   * Sets the voice activity detection (VAD) audio floor threshold.
   * Captured audio below this amplitude level will be automatically gated and ignored.
   * @param value - The cutoff sensitivity threshold limit.
   */
  setMicrophoneSensitivity(value: number): void;

  /**
   * Queries the system multimedia framework to retrieve descriptive text labels of all available physical audio output playback devices.
   * @returns An array containing the plaintext names or driver descriptors of accessible output hardware components.
   */
  getOutputDevices(): string[];

  /**
   * Queries the system multimedia framework to retrieve descriptive text labels of all available physical audio input recording devices.
   * @returns An array containing the plaintext names or driver descriptors of accessible input hardware components.
   */
  getInputDevices(): string[];

  /**
   * Routes the voice playback audio rendering stream into a specific physical output device using its indexed layout match.
   * @param index - The hardware array element position index matching the list returned by {@link getOutputDevices}.
   */
  setOutputDevice(index: number): void;

  /**
   * Selects and hooks the physical recording mic input stream into a specific hardware component using its indexed layout match.
   * @param index - The hardware array element position index matching the list returned by {@link getInputDevices}.
   */
  setInputDevice(index: number): void;

  /**
   * Configures the local input listening radius or proximity box boundaries.
   * @param distance - Maximum distance measurement units used to bound transmission scopes.
   */
  setInputDistance(distance: number): void;

  /**
   * Sets the maximum linear distance radius over which a remote player's 3D spatialized voice stream will attenuate down to silence.
   * @param distance - Proximity spatial calculation distance limits.
   */
  setOutputDistance(distance: number): void;

  /**
   * Evaluates whether the voice client manager is initialized, connected to a voice channel, and operating normally.
   * @returns `true` if the system layer is running and ready, otherwise `false`.
   */
  isActive(): boolean;
}
