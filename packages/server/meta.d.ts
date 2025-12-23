interface MpMeta {
  setGlobalMeta(key: string, value: any, sync?: boolean): void;
  getGlobalMeta<T = any>(key: string): T;
  setPlayerMeta(
    playerId: number,
    key: string,
    value: any,
    sync?: boolean,
  ): void;
  getPlayerMeta<T = any>(playerId: number, key: string): T;
  setEntityMeta(netId: number, key: string, value: any, sync?: boolean): void;
  getEntityMeta<T = any>(netId: number, key: string): T;
}
