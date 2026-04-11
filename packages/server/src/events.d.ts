import type { EntityType } from './entities';
import type { MpPlayer } from './players';
import type { GameHash } from './shared';

/**
 * Data describing a damage event between players.
 * @category Events/Players
 */
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

/**
 * @category Events/World
 */
type Vector3Object = {
  posX: number;
  posY: number;
  posZ: number;
};

/**
 * Data for a door state change event.
 * @category Events/World
 */
export type DoorStateChangeEventData = Vector3Object & {
  hashObject: GameHash;
  state: boolean;
};

/**
 * Data for lift/elevator state changes.
 * @category Events/World
 */
export type LiftStateChangeEventData = Vector3Object & {
  hashObject: GameHash;
  playerID: number;
  targetFloor: number;
  currentFloor: number;
  maxFloor: number;
};

/**
 * Explosion event information.
 * @category Events/World
 */
export type ExplosionEventData = Vector3Object & {
  isVehicle: boolean;
  vehicleID: number;
  hashObject: GameHash;
  objNetID: number;
};

/**
 * @category Events/Players
 */
export type AppearancePropertyData = {
  meshType: number;
  isEnabed: boolean;
  pathToMesh: GameHash;
  appearanceHash: GameHash;
  chunkMask: GameHash;
};

/**
 * @category Events/Players
 */
export type AppearanceWeightPropertyData = {
  targetHash: GameHash;
  regionHash: GameHash;
  weight: number;
};

/**
 * @category Events/Players
 */
export type PlayerAppearanceChangeEventData = {
  skinneds: AppearancePropertyData[];
  garments: AppearancePropertyData[];
  morphs: AppearancePropertyData[];
  weights: AppearanceWeightPropertyData[];
};

/**
 * @category Events/Players
 */
export type PlayerDeathEventData = {
  killerId?: number;
};

/**
 * @category Events/Vehicles
 */
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

/**
 * @category Events/Vehicles
 */
export type VehicleDestructionChangeEventData = {
  vehicleID: number;
  brokenGlass: number;
  brokenLights: number;
  flatTire: number;
  windshieldShattered: boolean;
};

/**
 * @category Events/World
 */
export type FireEventData = Vector3Object & {
  hashObject: GameHash;
  dirX: number;
  dirY: number;
  dirZ: number;
};

/**
 * @category Events/Pickups
 */
export type PickupChangeEventData = {
  pickupNetId: number;
  pickupHash: GameHash;
  pickupHashes: GameHash[];
};

/**
 * @category Events/Pickups
 */
export type PickupDespawnEventData = {
  pickupNetId: number;
  pickupHash: GameHash;
  isBag: boolean;
};

/**
 * @category Events/Pickups
 */
export type PickupCreateEventData = Vector3Object & {
  pickupNetId: number;
  pickupHash: GameHash;
  pickupHashes: GameHash[];
  isBag: boolean;
};

/**
 * Events related to resources.
 * @category Events/Resources
 */
interface ResourcesEvents {
  /**
   * Triggered when any resource starts.
   */
  anyResourceStart(resourceName: string): void;
  /**
   * Triggered when any resource stops.
   */
  anyResourceStop(resourceName: string): void;
  /**
   * Triggered when any server resource starts.
   */
  anyServerResourceStart(resourceName: string): void;
  /**
   * Triggered when any server resource stops.
   */
  anyServerResourceStop(resourceName: string): void;
  /**
   * Triggered when a resource starts.
   */
  resourceStart(): void;
  /**
   * Triggered when a resource stops.
   */
  resourceStop(): void;
  /**
   * Triggered when resources are refreshed.
   */
  resourcesRefresh(): void;
}

/**
 * Events related to players.
 * @category Events/Players
 */
interface PlayersEvents {
  /**
   * Triggered when a player is connecting.
   */
  playerConnecting(tempId: number, name: string): void;
  /**
   * Triggered when a player has connected.
   */
  playerConnected(playerId: number, tempId: string): void;
  /**
   * Triggered when a player spawns.
   */
  playerSpawn(playerId: number): void;
  /**
   * Triggered when a player respawns.
   */
  playerRespawn(playerId: number, data: Vector3Object): void;
  /**
   * Triggered when a player despawns.
   */
  playerDespawn(playerId: number): void;
  /**
   * Triggered when a player dies.
   */
  playerDeath(playerId: number, data: PlayerDeathEventData): void;
  /**
   * Triggered when a player disconnects.
   */
  playerDisconnected(playerId: number, reason: string): void;
  /**
   * Triggered when a player's appearance changes.
   */
  playerAppearanceChange(
    playerId: number,
    data: PlayerAppearanceChangeEventData,
  ): void;

  /**
   * Triggered when a player takes damage.
   */
  damage(playerId: number, data: DamageEventData): void;
}

/**
 * Events related to the world.
 * @category Events/World
 */
interface WorldEvents {
  /**
   * Triggered when a any door's state changes.
   */
  doorStateChange(playerId: number, data: DoorStateChangeEventData): void;
  /**
   * Triggered when a any lift's state changes.
   */
  liftStateChange(playerId: number, data: LiftStateChangeEventData): void;
  /**
   * Triggered when a fire starts anywhere on map.
   */
  fire(playerId: number, data: FireEventData): void;
  /**
   * Triggered when an explosion occurs.
   */
  explosion(playerId: number, data: ExplosionEventData): void;
}

/**
 * Events related to Vehicles.
 * @category Events/Vehicles
 */
interface VehiclesEvents {
  /**
   * Triggered when a vehicle's customization changes (usually CrystalCoat).
   */
  vehicleCustomizationChange(
    playerId: number,
    data: VehicleCustomizationChangeEventData,
  ): void;

  /**
   * Triggered when a vehicle's destruction changes.
   */
  vehicleDestructionChange(
    playerId: number,
    data: VehicleDestructionChangeEventData,
  ): void;

  /**
   * Triggered when a vehicle spawns.
   */
  vehicleSpawn(id: number): void;

  /**
   * Triggered when a vehicle despawns.
   */
  vehicleDespawn(id: number): void;
}

/**
 * Events related to Pickups
 * @category Events/Pickups
 */
interface PickupsEvents {
  /**
   * Triggered when a pickup's state changes.
   */
  pickupChange(playerId: number, data: PickupChangeEventData): void;

  /**
   * Triggered when a pickup is raised.
   */
  pickupRaise(playerId: number, data: PickupDespawnEventData): void;

  /**
   * Triggered when a pickup is dropped.
   */
  pickupDrop(playerId: number, data: PickupCreateEventData): void;

  /**
   * Triggered when a pickup spawns.
   */
  pickupSpawn(id: number): void;

  /**
   * Triggered when a pickup despawns.
   */
  pickupDespawn(id: number): void;
}

/**
 * Events related to Peds.
 * @category Events/Peds
 */
interface PedEvents {
  /**
   * Triggered when a ped spawns.
   */
  pedSpawn(id: number): void;
  /**
   * Triggered when a ped despawns.
   */
  pedDespawn(id: number): void;
}

/**
 * @category Events/Entities
 */
interface EntitiesEvents {
  /**
   * Triggered when an entity spawns.
   *
   * @param id - The entity ID
   * @param type - The entity type (see {@link EntityType})
   */
  entitySpawn(id: number, type: EntityType): void;

  /**
   * Triggered when an entity despawns.
   *
   * @param id - The entity ID
   * @param type - The entity type (see {@link EntityType})
   */
  entityDespawn(id: number, type: EntityType): void;

  /**
   * Triggered when an object spawns.
   */
  objectSpawn(id: number): void;
  /**
   *  Triggered when an object despawns.
   */
  objectDespawn(id: number): void;

  /**
   * Triggered when a game object spawns.
   */
  gameObjectSpawn(id: number): void;
  /**
   * Triggered when a game object despawns.
   */
  gameObjectDespawn(id: number): void;
}

/**
 * @ignore
 */
export interface MpEventsMap
  extends EntitiesEvents,
    PedEvents,
    PickupsEvents,
    VehiclesEvents,
    WorldEvents,
    PlayersEvents,
    ResourcesEvents {}

/**
 * Event system for subscribing, emitting, and handling multiplayer events.
 *
 * Provides both strongly typed and generic event APIs.
 * @category Events
 */
export interface MpEvents {
  /**
   * Listen for a platform or custom event.
   *
   * @typeParam E - Event key from MpEventsMap
   */
  on<E extends keyof MpEventsMap>(eventName: E, callback: MpEventsMap[E]): void;

  /**
   * Listen for a generic event.
   */
  on(eventName: string, callback: (...args: any[]) => void): void;

  /**
   * Listen for a client-side event on the server.
   *
   * @param eventName Event name
   * @param callback Function triggered with player context
   */
  onClient(
    eventName: string,
    callback: (player: MpPlayer, ...args: any[]) => void,
  ): void;

  /**
   * Unregister an event listener.
   *
   * Works for both standard and {@link MpEvents.onClient} events.
   *
   * @typeParam E - Event key from MpEventsMap
   */
  off<E extends keyof MpEventsMap>(
    eventName: E,
    callback: MpEventsMap[E],
  ): void;

  /**
   * Unregister a generic event listener.
   */
  off(eventName: string, callback: (...args: any[]) => void): void;

  /**
   * Emit a shared custom event.
   */
  emit(eventName: string, ...args: any[]): void;

  /**
   * Emit a client-side event from the server.
   *
   * @param player Target player or player ID
   */
  emitClient(
    player: MpPlayer | number,
    eventName: string,
    ...args: any[]
  ): void;
}
