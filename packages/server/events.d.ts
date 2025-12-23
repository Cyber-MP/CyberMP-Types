type OnDamageEvent = {
  damageType: number;
  weaponHash: number;
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

type OnDoorChangeStateEvent = {
  hashObject: number;
  state: boolean;
  posX: number;
  posY: number;
  posZ: number;
};

type OnLiftChangeStateEvent = {
  hashObject: number;
  playerID: number;
  targetFloor: number;
  currentFloor: number;
  maxFloor: number;
  posX: number;
  posY: number;
  posZ: number;
};

interface MpEventsMap {
  onResourceStarted(resourceName: string): void;
  onResourcesRefreshed(): void;
  onResourceStopped(resourceName: string): void;
  onServerResourceStarted(resourceName: string): void;
  onServerResourceStopped(resourceName: string): void;
  onPlayerConnecting(tempId: number, name: string): void;
  onPlayerConnected(playerId: number, tempId: string): void;
  onPlayerDisconnected(playerId: number, reason: string): void;
  onDamageEvent(playerId: string, data: OnDamageEvent): void;
  onDoorChangeStateEvent(playerId: string, data: OnDoorChangeStateEvent): void;
  onLiftChangeStateEvent(playerId: string, data: OnLiftChangeStateEvent): void;
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
  onClient(eventName: string, callback: (...args: any[]) => void): void;

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
  emitClient(eventName: string, playerId: number, ...args: any[]): void;

  /**
   * Register a command in the server scope.
   * @param commandName Command name without "/".
   * @param callback Callback with id and args.
   * @deprecated use mp.commands instead
   */
  addCommand(
    commandName: string,
    callback: (id: number, args: string[]) => void,
  ): void;
}
