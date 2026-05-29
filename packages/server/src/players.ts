import type { EntityType, MpEntities, MpEntity } from './entities';
import type { Vector3 } from './shared';
import type { MpVehicle } from './vehicles';

/**
 * @category Entities/Players
 */
export interface MpPlayer extends MpEntity<EntityType.Player> {
  readonly velocity: Vector3;
  readonly health: number;
  readonly nickname: string;
  readonly ping: number;
  readonly vehicle: MpVehicle | null;
  readonly lastVehicle: MpVehicle | null;
  readonly ip: string;

  kick(reason?: string): void;

  emit(eventName: string, ...args: any[]): void;
  mute(): void;
}

/**
 * @category Entities/Players
 */
export interface MpPlayers extends MpEntities<MpPlayer> {
  kick(player: MpPlayer | number, reason?: string): void;
  toArray(): MpPlayer[];
}
