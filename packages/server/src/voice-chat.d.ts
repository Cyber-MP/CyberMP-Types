import type { MpPlayer } from './players';

/**
 * @category VoiceChat
 */
export interface MpVoiceChat {
  mutePlayer(player: MpPlayer | number): void;

  createChannel(voiceId: number): void;

  isPlayerMuted(player: MpPlayer | number): boolean;
}
