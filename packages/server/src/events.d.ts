import type { MpPlayer } from './players';
import type { GameHash } from './shared';

export type DamageEventData = {
  damageType: number;
  weaponHash: GameHash;
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
  compName: string;
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

export type DoorStateChangeEventData = Vector3Object & {
  hashObject: GameHash;
  state: boolean;
};

export type LiftStateChangeEventData = Vector3Object & {
  hashObject: GameHash;
  playerID: number;
  targetFloor: number;
  currentFloor: number;
  maxFloor: number;
};

export type ExplosionEventData = Vector3Object & {
  isVehicle: boolean;
  vehicleID: number;
  hashObject: GameHash;
  objNetID: number;
};

export type AppearancePropertyData = {
  meshType: number;
  isEnabed: boolean;
  pathToMesh: GameHash;
  appearanceHash: GameHash;
  chunkMask: GameHash;
};

export type AppearanceWeightPropertyData = {
  targetHash: GameHash;
  regionHash: GameHash;
  weight: number;
};

export type PlayerAppearanceChangeEventData = {
  skinneds: AppearancePropertyData[];
  garments: AppearancePropertyData[];
  morphs: AppearancePropertyData[];
  weights: AppearanceWeightPropertyData[];
};

export type PlayerDeathEventData = {
  killerId?: number;
};

export type VehicleCustomizationChangeEventData = {
  isVehicleWasCustomized: boolean;
  isEnabledVehCustomization: boolean;
  isDisabledVehCustomizationByDamage: boolean;
  lightsColorDefined: boolean;
  lightsColorHue: number;
  primaryColorR: number;
  primaryColorG: number;
  primaryColorB: number;
  primaryColorDefined: boolean;
  secondaryColorR: number;
  secondaryColorG: number;
  secondaryColorB: number;
  secondaryColorDefined: boolean;
  vehicleID: number;
  hashAppearance: GameHash;
};

export type VehicleDestructionChangeEventData = {
  vehicleID: number;
  brokenGlass: number;
  brokenLights: number;
  flatTire: number;
  windshieldShattered: boolean;
};

export type FireEventData = Vector3Object & {
  hashObject: GameHash;
  dirX: number;
  dirY: number;
  dirZ: number;
};

export type PickupChangeEventData = {
  pickupNetId: number;
  pickupHash: GameHash;
  pickupHashes: GameHash[];
};

export type PickupDespawnEventData = {
  pickupNetId: number;
  pickupHash: GameHash;
  isBag: boolean;
};

export type PickupCreateEventData = Vector3Object & {
  pickupNetId: number;
  pickupHash: GameHash;
  pickupHashes: GameHash[];
  isBag: boolean;
};

export interface MpEventsMap {
  anyResourceStart(resourceName: string): void;
  anyResourceStop(resourceName: string): void;
  anyServerResourceStart(resourceName: string): void;
  anyServerResourceStop(resourceName: string): void;
  resourceStart(): void;
  resourceStop(): void;
  resourcesRefresh(): void;

  playerConnecting(tempId: number, name: string): void;
  playerConnected(playerId: number, tempId: string): void;
  playerSpawn(playerId: number): void;
  playerRespawn(playerId: number, data: Vector3Object): void;
  playerDeath(playerId: number, data: PlayerDeathEventData): void;
  playerDisconnected(playerId: number, reason: string): void;
  playerAppearanceChange(
    playerId: number,
    data: PlayerAppearanceChangeEventData,
  ): void;

  damage(playerId: number, data: DamageEventData): void;
  fire(playerId: number, data: FireEventData): void;
  explosion(playerId: number, data: ExplosionEventData): void;
  doorStateChange(playerId: number, data: DoorStateChangeEventData): void;
  liftStateChange(playerId: number, data: LiftStateChangeEventData): void;

  vehicleCustomizationChange(
    playerId: number,
    data: VehicleCustomizationChangeEventData,
  ): void;
  vehicleDestructionChange(
    playerId: number,
    data: VehicleDestructionChangeEventData,
  ): void;

  pickupChange(playerId: number, data: PickupChangeEventData): void;
  pickupDespawn(playerId: number, data: PickupDespawnEventData): void;
  pickupCreate(playerId: number, data: PickupCreateEventData): void;
}

export interface MpEvents {
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
