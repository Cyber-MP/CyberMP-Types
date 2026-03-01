/// <reference path="./players.d.ts" />

interface MpVoiceChat {
  mutePlayer(player: MpPlayer | number): void;

  createChannel(voiceId: number): void;

  isPlayerMuted(player: MpPlayer | number): boolean;
}
