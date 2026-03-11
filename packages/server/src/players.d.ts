import type { MpEntities, MpEntity } from './entities';
import type { Vector3 } from './shared';
import type { MpVehicle } from './vehicles';

export type PlayerIdentifierType = 'steam' | 'ip';

export interface MpPlayer extends MpEntity {
  readonly velocity: Vector3;
  readonly health: number;
  readonly nickname: string;
  readonly ping: number;
  readonly vehicle: MpVehicle | null;
  readonly lastVehicle: MpVehicle | null;

  kick(reason?: string): void;
  getIdentifier(type: PlayerIdentifierType): string;

  emit(eventName: string, ...args: any[]): void;
  mute(): void;
}

export interface MpPlayers extends MpEntities<MpPlayer> {
  kick(player: MpPlayer | number, reason?: string): void;
  getIdentifier(player: MpPlayer | number, type: PlayerIdentifierType): string;
  toArray(): MpPlayer[];
}
