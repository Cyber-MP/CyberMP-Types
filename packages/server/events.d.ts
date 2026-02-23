type DamageEventData = {
  damageType: number;
  weaponHash: GameHash;
  overrideDefaultDamage: boolean;
  totalDamage: number;
  killerId: number;
  victimId: number;
  hitComponent: number;
  hitPositionX: number;
  hitPositionY: number;
  hitPositionZ: number;
  hitDirectionX: number;
  hitDirectionY: number;
  hitDirectionZ: number;
  damageValues: number[];
  flags: number[];
  hitGlobalIds: number[];
  compName: string[];
  dismembermentParts: any[];
  hitReactionZones: any[];
  hitShapeTypes: any[];
  hitShapeNames: string[];
  physicsMaterials: string[];
};

type Vector3Object = {
  posX: number;
  posY: number;
  posZ: number;
};

type DoorStateChangeEventData = Vector3Object & {
  hashObject: GameHash;
  state: boolean;
};

type LiftStateChangeEventData = Vector3Object & {
  hashObject: GameHash;
  playerID: number;
  targetFloor: number;
  currentFloor: number;
  maxFloor: number;
};

type ExplosionEventData = Vector3Object & {};

type AppearancePropertyData = {
  meshType: number;
  isEnabed: boolean;
  pathToMesh: GameHash;
  appearanceHash: GameHash;
  chunkMask: GameHash;
};

type AppearanceWeightPropertyData = {
  targetHash: GameHash;
  regionHash: GameHash;
  weight: number;
};

type PlayerAppearanceChangeEventData = {
  skinneds: AppearancePropertyData[];
  garments: AppearancePropertyData[];
  morphs: AppearancePropertyData[];
  weights: AppearanceWeightPropertyData[];
};

type PlayerWastedEventData = {
  killerId?: number;
};

interface MpEventsMap {
  resourceStarted(resourceName: string): void;
  resourcesRefreshed(): void;
  resourceStopped(resourceName: string): void;
  serverResourceStarted(resourceName: string): void;
  serverResourceStopped(resourceName: string): void;
  playerConnecting(tempId: number, name: string): void;
  playerConnected(playerId: number, tempId: string): void;
  playerRespawn(playerId: number, data: Vector3Object): void;
  playerWasted(playerId: number, data: PlayerWastedEventData): void;
  playerDisconnected(playerId: number, reason: string): void;
  playerAppearanceChange(
    playerId: number,
    data: PlayerAppearanceChangeEventData,
  ): void;
  damage(playerId: number, data: DamageEventData): void;
  explosion(playerId: number, data: ExplosionEventData): void;
  doorStateChange(playerId: number, data: DoorStateChangeEventData): void;
  liftStateChange(playerId: number, data: LiftStateChangeEventData): void;
}

/**
 * Main MP events interface.
 */
interface MpEvents {
  /**
   * Listen for a shared (server or client) custom event.
   * @param eventName The name of the custom event.
   * @param callback The callback to run when triggered.
   */
  on<E extends keyof MpEventsMap>(eventName: E, callback: MpEventsMap[E]): void;
  on(eventName: string, callback: (...args: any[]) => void): void;

  /**
   * Listen for a client-side event on the server.
   * @param eventName The name of the event.
   * @param callback Function triggered when the event is received.
   */
  onClient(
    eventName: string,
    callback: (player: MpPlayer, ...args: any[]) => void,
  ): void;

  /**
   * Unregister a custom event listener.
   * @param eventName Name of the event.
   * @param callback Callback function.
   */
  off<E extends keyof MpEventsMap>(
    eventName: E,
    callback: MpEventsMap[E],
  ): void;
  off(eventName: string, callback: (...args: any[]) => void): void;

  /**
   * Emit a shared custom event.
   * @param eventName The event name to emit.
   * @param args Arguments to pass to the handler.
   */
  emit(eventName: string, ...args: any[]): void;

  /**
   * Emit a client-side event from the server.
   * @param eventName Resource name to emit from.
   * @param playerId Target player entity/network ID.
   * @param args Arguments to send with the event.
   */
  emitClient(
    player: MpPlayer | number,
    eventName: string,
    ...args: any[]
  ): void;
}
