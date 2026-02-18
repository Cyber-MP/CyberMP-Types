type PlayerIdentifierType = "steam" | "ip";

interface MpPlayer extends MpEntity {
  readonly velocity: Vector3;
  readonly health: number;
  readonly nickname: string;
  readonly ping: number;
  readonly vehicle: MpVehicle | null;
  readonly lastVehicle: MpVehicle | null;

  kick(reason?: string): void;
  getIdentifier(type: PlayerIdentifierType): string;
}

interface MpPlayers extends MpEntities<MpPlayer> {
  kick(player: MpPlayer | number, reason?: string): void;
  getIdentifier(player: MpPlayer | number, type: PlayerIdentifierType): string;
  toArray(): MpPlayer[];
}
