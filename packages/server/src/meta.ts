import type { MpEntity } from './entities';
import type { MpPlayer } from './players';

/**
 * Sets/gets metadata for the any entity.
 * @category Global
 */
export interface MpMeta {
  setGlobalMeta(key: string, value: any, sync?: boolean): void;
  getGlobalMeta<T = any>(key: string): T;

  setPlayerMeta(
    player: MpPlayer | number,
    key: string,
    value: any,
    sync?: boolean,
  ): void;
  getPlayerMeta<T = any>(player: MpPlayer | number, key: string): T;

  setEntityMeta(
    entity: MpEntity | number,
    key: string,
    value: any,
    sync?: boolean,
  ): void;
  getEntityMeta<T = any>(entity: MpEntity | number, key: string): T;
}
