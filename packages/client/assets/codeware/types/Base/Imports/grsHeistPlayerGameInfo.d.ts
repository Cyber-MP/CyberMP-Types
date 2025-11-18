export interface grsHeistPlayerGameInfo {
  peerID?: netPeerID;
  isInGame?: boolean;
  isReady?: boolean;
  isRespawning?: boolean;
  isDead?: boolean;
  spawnTime?: netTime;
  killCount?: number;
  deathCount?: number;
  characterRecord?: string;
}
