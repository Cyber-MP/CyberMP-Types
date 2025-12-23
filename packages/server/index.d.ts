/// <reference path="./shared.d.ts" />
/// <reference path="./resources.d.ts" />
/// <reference path="./events.d.ts" />
/// <reference path="./commands.d.ts" />
/// <reference path="./meta.d.ts" />
/// <reference path="./entities.d.ts" />
/// <reference path="./players.d.ts" />
/// <reference path="./vehicles.d.ts" />
/// <reference path="./pickups.d.ts" />
/// <reference path="./objects.d.ts" />
/// <reference path="./peds.d.ts" />

/**
 * @deprecated use MpEntity instead
 */
type EntityId = number;

/**
 * @deprecated use number instead
 */
type NetId = number;

interface Mp {
  events: MpEvents;
  meta: MpMeta;
  resources: MpResources;
  commands: MpCommands;
  entities: MpEntities;
  vehicles: MpVehicles;
  players: MpPlayers;
  objects: MpObjects;
  pickups: MpPickups;
  peds: MpPeds;

  /**
   * Adds a server console variable.
   * @param varName Variable name.
   * @param value Variable value.
   */
  addVar(varName: string, value: any): void;

  /**
   * Adds a server-only console variable.
   * @param varName Variable name.
   * @param value Variable value.
   */
  addVarServer(varName: string, value: any): void;

  /**
   * Adds a shared (client+server) console variable.
   * @param varName Variable name.
   * @param value Variable value.
   */
  addVarShared(varName: string, value: any): void;

  /**
   * Checks if an entity exists in the game world.
   * @param entity Entity ID.
   * @returns True if entity exists, otherwise false.
   * @deprecated use mp.entities instead
   */
  doesEntityExist(entity: EntityId): boolean;

  /**
   * Converts an entity to its associated network ID.
   * @param entity The entity to convert.
   * @returns The network ID of the entity.
   * @deprecated use MpEntity.networkId instead
   */
  networkGetNetworkIdFromEntity(entity: EntityId): NetId;

  /**
   * Gets an entity by its network ID.
   * @param netID Network ID.
   * @returns Entity ID associated with the given network ID.
   * @deprecated use mp.entities.getByNetId
   */
  networkGetEntityFromNetworkId(netID: NetId): EntityId;

  /**
   * Gets the current owner synchronizing the entity.
   * @param entity The entity.
   * @returns The owner's entity ID.
   * @deprecated use MpEntity.owner
   */
  networkGetEntityOwner(entity: EntityId): EntityId;

  /**
   * Gets the first owner who synced this entity.
   * @param entity The entity.
   * @returns The first owner's entity ID.
   * @deprecated use MpEntity.firstOwner
   */
  networkGetFirstEntityOwner(entity: EntityId): EntityId;

  /**
   * Gets the position of an entity in 3D space.
   * @param entity The entity.
   * @returns [X, Y, Z] coordinates.
   * @deprecated use MpEntity.position
   */
  getEntityPos(entity: EntityId): Vector3;

  /**
   * Gets the linear velocity of an entity.
   * @param entity The entity.
   * @returns [X, Y, Z] velocity components.
   * @deprecated use MpEntity.velocity
   */
  getEntityVelocity(entity: EntityId): Vector3;

  /**
   * Gets the angular velocity of a vehicle.
   * @param entity The vehicle entity.
   * @returns [X, Y, Z] angular velocity.
   * @deprecated use MpVehicle.velocity
   */
  getEntityAngularVelocity(entity: EntityId): Vector3;

  /**
   * Gets the rotation of an entity.
   * @param entity The entity.
   * @returns [Pitch, Roll, Yaw] rotation.
   * @deprecated use MpEntity.rotation
   */
  getEntityRotation(entity: EntityId): Vector3;

  /**
   * Gets the yaw angle of an entity.
   * @param entity The entity.
   * @returns Yaw in degrees.
   * @deprecated use MpEntity.yaw
   */
  getEntityYaw(entity: EntityId): number;

  /**
   * Gets the model hash of an entity.
   * @param entity The entity.
   * @returns Model hash as number.
   * @deprecated use MpVehicle.model
   */
  getEntityModel(entity: EntityId): number;

  /**
   * Gets the type of an entity.
   * @param entity The entity.
   * @returns The entity type (Player, Vehicle, or Object).
   * @deprecated use MpEntity.type
   */
  getEntityType(entity: EntityId): EntityType;

  /**
   * Gets a vehicle's current health.
   * @param entity Vehicle entity.
   * @returns Health as a number.
   * @deprecated use MpVehicle.health
   */
  getVehicleHealth(entity: EntityId): number;

  /**
   * Gets an entity's health (player, ped, or object).
   * @param entity The entity.
   * @returns Health as a number.
   * @deprecated use MpPlayer.health or MpVehicle.health
   */
  getEntityHealth(entity: EntityId): number;

  /**
   * Gets all vehicles created by the server.
   * @returns Array of vehicle entity IDs.
   * @deprecated use mp.vehicles
   */
  getAllVehicles(): EntityId[];

  /**
   * Gets all server-side objects.
   * @returns Array of object entity IDs.
   * @deprecated use mp.objects
   */
  getAllObject(): EntityId[];

  /**
   * Gets all server-side peds.
   * @returns Array of ped entity IDs.
   * @deprecated use mp.peds
   */
  getAllPeds(): EntityId[];

  /**
   * Gets all connected players.
   * @returns Array of player entity IDs.
   * @deprecated use mp.players
   */
  getPlayers(): EntityId[];

  /**
   * Gets the vehicle a player is in.
   * @param player Player entity ID.
   * @param lastVehicle If true, returns the last vehicle, else the current vehicle.
   * @returns Vehicle entity ID.
   * @deprecated use MpPlayer.vehicle or MpPlayer.lastVehicle
   */
  getVehiclePedIsIn(player: EntityId, lastVehicle: boolean): EntityId;

  /**
   * Gets the player in a specific vehicle seat.
   * @param vehicle Vehicle entity ID.
   * @param seatId Seat index.
   * @returns Entity ID or 0 if empty.
   * @deprecated use MpVehicle.getPlayerInSeat
   */
  getPedInVehicleSeat(vehicle: EntityId, seatId: VehicleSeat): EntityId | 0;

  /**
   * Gets the last player that was in the given seat.
   * @param vehicle Vehicle entity ID.
   * @param seatId Seat index.
   * @returns Entity ID or 0 if none.
   * @deprecated use MpVehicle.getLastPlayerInSeat
   */
  getLastPedInVehicleSeat(vehicle: EntityId, seatId: VehicleSeat): EntityId | 0;

  /**
   * Deletes an entity from the world.
   * @param entity The entity to delete.
   * @deprecated use mp.entities.destroy
   */
  deleteEntity(entity: EntityId): void;

  /**
   * Sets the streaming radius for an entity.
   * @param entity Entity ID.
   * @param radius Radius in meters.
   * @deprecated use MpEntity.setStreamingRadius or mp.entities.setStreamingRadius
   */
  setEntityStreamingRadius(entity: EntityId, radius: number): void;

  /**
   * Sets the streaming radius for a player.
   * @param netID Player's network ID.
   * @param radius Radius in meters.
   * @deprecated use MpEntity.setStreamingRadius or mp.entities.setStreamingRadius
   */
  setPlayerStreamingRadius(netID: NetId, radius: number): void;

  /**
   * Gets the dimension of a player.
   * @param netID Player's network ID.
   * @returns The dimension number.
   * @deprecated use MpEntity.dimension
   */
  getPlayerDimension(netID: NetId): number;

  /**
   * Sets the dimension of a player.
   * @param netID Player's network ID.
   * @param dimension Target dimension.
   * @deprecated use setter on MpEntity.dimension
   */
  setPlayerDimension(netID: NetId, dimension: number): void;

  /**
   * Gets the dimension of an entity.
   * @param entity Entity ID.
   * @returns The dimension number.
   * @deprecated use on MpEntity.dimension
   */
  getEntityDimension(entity: EntityId): number;

  /**
   * Sets the dimension of an entity.
   * @param entity Entity ID.
   * @param dimension Target dimension.
   * @deprecated use setter on MpEntity.dimension
   */
  setEntityDimension(entity: EntityId, dimension: number): void;

  /**
   * Gets the name of a player.
   * @param netID Player's network ID.
   * @returns Player name.
   * @deprecated use MpPlayer.nickname
   */
  getPlayerName(netID: NetId): string;

  /**
   * Gets the number of identifiers available for a player.
   * @param netID Player's network ID.
   * @returns Number of identifiers.
   */
  getNumPlayerIdentifiers(netID: NetId): number;

  /**
   * Gets a specific identifier by index.
   * @param netID Player's network ID.
   * @param index Index of the identifier.
   * @returns Identifier string.
   */
  getPlayerIdentifier(netID: NetId, index: number): string;

  /**
   * Gets a specific identifier by type.
   * @param netID Player's network ID.
   * @param type Identifier type (e.g., "ip").
   * @returns Identifier string.
   * @deprecated use MpPlayer.getIdentifier
   */
  getPlayerIdentifierByType(netID: NetId, type: string): string;

  /**
   * Gets the IP address of a player.
   * @param netID Player's network ID.
   * @returns IP address.
   */
  getPlayerEndpoint(netID: NetId): string;

  /**
   * Gets the ping of a player.
   * @param netID Player's network ID.
   * @returns Ping in ms.
   * @deprecated use MpPlayer.ping
   */
  getPlayerPing(netID: NetId): number;

  /**
   * Kicks a player from the server.
   * @param netID Player's network ID.
   * @param reason Reason for the kick.
   * @deprecated use MpPlayer.kick or mp.players.kick
   */
  kickPlayer(netID: NetId, reason: string): void;

  /**
   * Gets the entity ID of a player's ped.
   * @param netID Player's network ID.
   * @returns Entity ID of the player's ped.
   * @deprecated Use MpPlayer.id instead
   */
  getPlayerPed(netID: NetId): EntityId;

  /**
   * Spawns a pickup item in the game world.
   * @param hash Pickup model hash.
   * @param type Pickup type.
   * @param x X position.
   * @param y Y position.
   * @param z Z position.
   * @param yaw Yaw rotation.
   * @returns Entity ID of the pickup.
   * @deprecated Use mp.pickups.create instead
   */
  createPickup(
    hash: number,
    type: PickupType,
    x: number,
    y: number,
    z: number,
    yaw: number,
  ): EntityId;

  /**
   * Spawns a vehicle in the world.
   * @param modelHash Vehicle model hash.
   * @param appearanceHash Vehicle tuning hash.
   * @param x X position.
   * @param y Y position.
   * @param z Z position.
   * @param health Vehicle health.
   * @param yaw Yaw rotation.
   * @returns Entity ID of the created vehicle.
   * @deprecated Use mp.vehicles.create instead
   */
  createVehicle(
    modelHash: bigint | number,
    appearanceHash: number | bigint,
    x: number,
    y: number,
    z: number,
    health: number,
    yaw: number,
  ): EntityId;

  /**
   * Spawns an object in the game world.
   * @param modelHash Object model hash.
   * @param x X position.
   * @param y Y position.
   * @param z Z position.
   * @param yaw Yaw rotation.
   * @param dynamic Whether the object is dynamic.
   * @returns Entity ID of the object.
   * @deprecated Use mp.objects.create instead
   */
  createObject(
    modelHash: number,
    x: number,
    y: number,
    z: number,
    yaw: number,
    dynamic: boolean,
  ): EntityId;

  /**
   * Spawns a ped in the game world.
   * @param hash Ped model hash.
   * @param x X coordinate.
   * @param y Y coordinate.
   * @param z Z coordinate.
   * @param health Ped health.
   * @param yaw Orientation yaw.
   * @returns Entity ID of the ped.
   * @deprecated Use mp.peds.create instead
   */
  createPed(
    hash: number,
    x: number,
    y: number,
    z: number,
    health: number,
    yaw: number,
  ): EntityId;

  /**
   * Reads a file inside a resource and returns its contents.
   * @param resourceName Name of the resource.
   * @param pathToResource Path to the file.
   * @returns File content as string.
   * @deprecated Use mp.resources instead
   */
  loadResourceFile(resourceName: string, pathToResource: string): string;

  /**
   * Gets metadata from a resource manifest.
   * @param resourceName Resource name.
   * @param keyName Metadata key.
   * @param index Index (if multiple values exist).
   * @returns Metadata string.
   * @deprecated Use mp.resources instead
   */
  getResourceMetadata(
    resourceName: string,
    keyName: string,
    index: number,
  ): string;

  /**
   * Gets the number of metadata values for a key.
   * @param resourceName Resource name.
   * @param keyString Metadata key name.
   * @returns Number of metadata entries.
   * @deprecated Use mp.resources instead
   */
  getNumResourceMetadata(resourceName: string, keyString: string): number;

  /**
   * Gets the current resource's name.
   * @returns Resource name.
   * @deprecated Use mp.resources instead
   */
  getCurrentResourceName(): string;

  /**
   * Checks if the code is running on the server.
   * @returns True if running on server, false otherwise.
   */
  isServer(): boolean;

  /**
   * Executes a registered server command.
   * @deprecated Use mp.commands.execute instead
   * @param commandName Command string.
   */
  executeCommand(commandName: string): void;

  /**
   * Gets the current state of a resource.
   * @param resourceName The resource to check.
   * @returns Resource state as string.
   * @deprecated Use mp.resources.getResourceState instead
   */
  getResourceState(resourceName: string): string;

  /**
   * Gets a console variable's value.
   * @param varName Variable name.
   * @returns Value as string.
   */
  getVar(varName: string): string;

  /**
   * Gets a console variable's integer value.
   * @param varName Variable name.
   * @returns Value as integer.
   */
  getVarInt(varName: string): number;
}

declare const mp: Mp;
