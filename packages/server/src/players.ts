import type { EntityType, MpEntities, MpEntity } from './entities';
import type { Vector3 } from './shared';
import type { MpVehicle } from './vehicles';

export type MpPlayerIdentifierType = 'steam' | 'ip';

export interface MpPlayer extends MpEntity<EntityType.Player> {
  readonly velocity: Vector3;
  readonly health: number;
  readonly nickname: string;
  readonly ping: number;
  readonly vehicle: MpVehicle | null;
  readonly lastVehicle: MpVehicle | null;

  kick(reason?: string): void;
  getIdentifier(type: MpPlayerIdentifierType): string;

  emit(eventName: string, ...args: any[]): void;
  mute(): void;
}

export interface MpPlayers extends MpEntities<MpPlayer> {
  kick(player: MpPlayer | number, reason?: string): void;
  getIdentifier(
    player: MpPlayer | number,
    type: MpPlayerIdentifierType,
  ): string;
  toArray(): MpPlayer[];
}
