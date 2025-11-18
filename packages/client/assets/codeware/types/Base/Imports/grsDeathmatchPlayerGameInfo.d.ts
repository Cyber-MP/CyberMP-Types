export interface grsDeathmatchPlayerGameInfo {
  peerID?: netPeerID;
  isInGame?: boolean;
  isDead?: boolean;
  spawnTime?: netTime;
  killCount?: number;
  deathCount?: number;
  lastShooter?: netPeerID;
}
