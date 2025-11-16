/**
 * Represents an in-game entity.
 */
declare type Entity = number;

/**
 * Represents a network ID associated with an entity.
 */
declare type NetID = number;

/**
 * Entity types.
 */
declare const enum EntityType {
  Player = 1,
  Vehicle = 2,
  Object = 3,
}

/**
 * Pickup types.
 */
declare const enum PickupType {
  Clothes = 1,
  Weapon = 2,
  Other = 3,
}

/**
 * Vehicle seat indexes.
 */
declare const enum VehicleSeat {
  Driver = 0,
  Passenger = 1,
  RearLeft = 2,
  RearRight = 3,
}

declare type Vector3 = [number, number, number];

declare type Vector4 = [number, number, number, number];

/**
 * Main MP events interface.
 */
interface MpEvents {
  /**
   * Listen for a client-side event on the server.
   * @param eventName The name of the event.
   * @param callback Function triggered when the event is received.
   */
  onClient(eventName: string, callback: (...args: any[]) => void): void;

  /**
   * Emit a client-side event from the server.
   * @param eventName Resource name to emit from.
   * @param playerId Target player entity/network ID.
   * @param args Arguments to send with the event.
   */
  emitClient(eventName: string, playerId: number, ...args: any[]): void;

  /**
   * Listen for a shared (server or client) custom event.
   * @param eventName The name of the custom event.
   * @param callback The callback to run when triggered.
   */
  on(eventName: string, callback: (...args: any[]) => void): void;

  /**
   * Unregister a custom event listener.
   * @param eventName Name of the event.
   * @param func Callback function.
   */
  off(eventName: string, func: (...args: any[]) => void): void;

  /**
   * Emit a shared custom event.
   * @param eventName The event name to emit.
   * @param args Arguments to pass to the handler.
   */
  emit(eventName: string, ...args: any[]): void;

  /**
   * Register a command in the server scope.
   * @param commandName Command name without "/".
   * @param callback Callback with id and args.
   */
  addCommand(
    commandName: string,
    callback: (id: number, args: string[]) => void,
  ): void;
}

interface MpMeta {
  setGlobalMeta(key: string, value: any, sync?: boolean): void;
  getGlobalMeta<T = any>(key: string): T;
  setPlayerMeta(
    playerId: number,
    key: string,
    value: any,
    sync?: boolean,
  ): void;
  getPlayerMeta<T = any>(playerId: number, key: string): T;
  setEntityMeta(netId: number, key: string, value: any, sync?: boolean): void;
  getEntityMeta<T = any>(netId: number, key: string): T;
}

/**
 * Main MP API interface.
 */
interface Mp {
  events: MpEvents;
  meta: MpMeta;

  /**
   * Starts a specific resource by name.
   * @param resourceName Name of the resource to start.
   */
  startResource(resourceName: string): void;

  /**
   * Stops a specific resource by name.
   * @param resourceName Name of the resource to stop.
   */
  stopResource(resourceName: string): void;

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
   */
  doesEntityExist(entity: Entity): boolean;

  /**
   * Converts an entity to its associated network ID.
   * @param entity The entity to convert.
   * @returns The network ID of the entity.
   */
  networkGetNetworkIdFromEntity(entity: Entity): NetID;

  /**
   * Gets an entity by its network ID.
   * @param netID Network ID.
   * @returns Entity ID associated with the given network ID.
   */
  networkGetEntityFromNetworkId(netID: NetID): Entity;

  /**
   * Gets the current owner synchronizing the entity.
   * @param entity The entity.
   * @returns The owner's entity ID.
   */
  networkGetEntityOwner(entity: Entity): Entity;

  /**
   * Gets the first owner who synced this entity.
   * @param entity The entity.
   * @returns The first owner's entity ID.
   */
  networkGetFirstEntityOwner(entity: Entity): Entity;

  /**
   * Gets the position of an entity in 3D space.
   * @param entity The entity.
   * @returns [X, Y, Z] coordinates.
   */
  getEntityPos(entity: Entity): Vector3;

  /**
   * Gets the linear velocity of an entity.
   * @param entity The entity.
   * @returns [X, Y, Z] velocity components.
   */
  getEntityVelocity(entity: Entity): Vector3;

  /**
   * Gets the angular velocity of a vehicle.
   * @param entity The vehicle entity.
   * @returns [X, Y, Z] angular velocity.
   */
  getEntityAngularVelocity(entity: Entity): Vector3;

  /**
   * Gets the rotation of an entity.
   * @param entity The entity.
   * @returns [Pitch, Roll, Yaw] rotation.
   */
  getEntityRotation(entity: Entity): Vector3;

  /**
   * Gets the yaw angle of an entity.
   * @param entity The entity.
   * @returns Yaw in degrees.
   */
  getEntityYaw(entity: Entity): number;

  /**
   * Gets the model hash of an entity.
   * @param entity The entity.
   * @returns Model hash as number.
   */
  getEntityModel(entity: Entity): number;

  /**
   * Gets the type of an entity.
   * @param entity The entity.
   * @returns The entity type (Player, Vehicle, or Object).
   */
  getEntityType(entity: Entity): EntityType;

  /**
   * Gets a vehicle's current health.
   * @param entity Vehicle entity.
   * @returns Health as a number.
   */
  getVehicleHealth(entity: Entity): number;

  /**
   * Gets an entity's health (player, ped, or object).
   * @param entity The entity.
   * @returns Health as a number.
   */
  getEntityHealth(entity: Entity): number;

  /**
   * Gets all vehicles created by the server.
   * @returns Array of vehicle entity IDs.
   */
  getAllVehicles(): Entity[];

  /**
   * Gets all server-side objects.
   * @returns Array of object entity IDs.
   */
  getAllObject(): Entity[];

  /**
   * Gets all server-side peds.
   * @returns Array of ped entity IDs.
   */
  getAllPeds(): Entity[];

  /**
   * Gets all connected players.
   * @returns Array of player entity IDs.
   */
  getPlayers(): Entity[];

  /**
   * Gets the vehicle a player is in.
   * @param player Player entity ID.
   * @param lastVehicle If true, returns the last vehicle, else the current vehicle.
   * @returns Vehicle entity ID.
   */
  getVehiclePedIsIn(player: Entity, lastVehicle: boolean): Entity;

  /**
   * Gets the player in a specific vehicle seat.
   * @param vehicle Vehicle entity ID.
   * @param seatId Seat index.
   * @returns Entity ID or 0 if empty.
   */
  getPedInVehicleSeat(vehicle: Entity, seatId: VehicleSeat): Entity | 0;

  /**
   * Gets the last player that was in the given seat.
   * @param vehicle Vehicle entity ID.
   * @param seatId Seat index.
   * @returns Entity ID or 0 if none.
   */
  getLastPedInVehicleSeat(vehicle: Entity, seatId: VehicleSeat): Entity | 0;

  /**
   * Deletes an entity from the world.
   * @param entity The entity to delete.
   */
  deleteEntity(entity: Entity): void;

  /**
   * Sets the streaming radius for an entity.
   * @param entity Entity ID.
   * @param radius Radius in meters.
   */
  setEntityStreamingRadius(entity: Entity, radius: number): void;

  /**
   * Sets the streaming radius for a player.
   * @param netID Player's network ID.
   * @param radius Radius in meters.
   */
  setPlayerStreamingRadius(netID: NetID, radius: number): void;

  /**
   * Gets the dimension of a player.
   * @param netID Player's network ID.
   * @returns The dimension number.
   */
  getPlayerDimension(netID: NetID): number;

  /**
   * Sets the dimension of a player.
   * @param netID Player's network ID.
   * @param dimension Target dimension.
   */
  setPlayerDimension(netID: NetID, dimension: number): void;

  /**
   * Gets the dimension of an entity.
   * @param entity Entity ID.
   * @returns The dimension number.
   */
  getEntityDimension(entity: Entity): number;

  /**
   * Sets the dimension of an entity.
   * @param entity Entity ID.
   * @param dimension Target dimension.
   */
  setEntityDimension(entity: Entity, dimension: number): void;

  /**
   * Gets the name of a player.
   * @param netID Player's network ID.
   * @returns Player name.
   */
  getPlayerName(netID: NetID): string;

  /**
   * Gets the number of identifiers available for a player.
   * @param netID Player's network ID.
   * @returns Number of identifiers.
   */
  getNumPlayerIdentifiers(netID: NetID): number;

  /**
   * Gets a specific identifier by index.
   * @param netID Player's network ID.
   * @param index Index of the identifier.
   * @returns Identifier string.
   */
  getPlayerIdentifier(netID: NetID, index: number): string;

  /**
   * Gets a specific identifier by type.
   * @param netID Player's network ID.
   * @param type Identifier type (e.g., "ip").
   * @returns Identifier string.
   */
  getPlayerIdentifierByType(netID: NetID, type: string): string;

  /**
   * Gets the IP address of a player.
   * @param netID Player's network ID.
   * @returns IP address.
   */
  getPlayerEndpoint(netID: NetID): string;

  /**
   * Gets the ping of a player.
   * @param netID Player's network ID.
   * @returns Ping in ms.
   */
  getPlayerPing(netID: NetID): number;

  /**
   * Kicks a player from the server.
   * @param netID Player's network ID.
   * @param reason Reason for the kick.
   */
  kickPlayer(netID: NetID, reason: string): void;

  /**
   * Checks if a player has a specific permission.
   * @param netID Player's network ID.
   * @param right Right/permission string.
   * @returns True if player has the right, false otherwise.
   */
  isPlayerHaveRight(netID: NetID, right: string): boolean;

  /**
   * Gets the entity ID of a player's ped.
   * @param netID Player's network ID.
   * @returns Entity ID of the player's ped.
   */
  getPlayerPed(netID: NetID): Entity;

  /**
   * Spawns a pickup item in the game world.
   * @param hash Pickup model hash.
   * @param type Pickup type.
   * @param x X position.
   * @param y Y position.
   * @param z Z position.
   * @param yaw Yaw rotation.
   * @returns Entity ID of the pickup.
   */
  createPickup(
    hash: number,
    type: PickupType,
    x: number,
    y: number,
    z: number,
    yaw: number,
  ): Entity;

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
   */
  createVehicle(
    modelHash: bigint | number,
    appearanceHash: number | bigint,
    x: number,
    y: number,
    z: number,
    health: number,
    yaw: number,
  ): Entity;

  /**
   * Spawns an object in the game world.
   * @param modelHash Object model hash.
   * @param x X position.
   * @param y Y position.
   * @param z Z position.
   * @param yaw Yaw rotation.
   * @param dynamic Whether the object is dynamic.
   * @returns Entity ID of the object.
   */
  createObject(
    modelHash: number,
    x: number,
    y: number,
    z: number,
    yaw: number,
    dynamic: boolean,
  ): Entity;

  /**
   * Spawns a ped in the game world.
   * @param hash Ped model hash.
   * @param x X coordinate.
   * @param y Y coordinate.
   * @param z Z coordinate.
   * @param health Ped health.
   * @param yaw Orientation yaw.
   * @returns Entity ID of the ped.
   */
  createPed(
    hash: number,
    x: number,
    y: number,
    z: number,
    health: number,
    yaw: number,
  ): Entity;

  /**
   * Verifies if a plain password matches a bcrypt hash.
   * @param password Plain password string.
   * @param hash Hashed bcrypt string.
   * @returns True if match, false otherwise.
   */
  verifyBcryptHash(password: string, hash: string): boolean;

  /**
   * Generates a bcrypt hash from a password.
   * @param password Plain password string.
   * @returns Bcrypt hash.
   */
  generateBcryptHash(password: string): string;

  /**
   * Reads a file inside a resource and returns its contents.
   * @param resourceName Name of the resource.
   * @param pathToResource Path to the file.
   * @returns File content as string.
   */
  loadResourceFile(resourceName: string, pathToResource: string): string;

  /**
   * Gets metadata from a resource manifest.
   * @param resourceName Resource name.
   * @param keyName Metadata key.
   * @param index Index (if multiple values exist).
   * @returns Metadata string.
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
   */
  getNumResourceMetadata(resourceName: string, keyString: string): number;

  /**
   * Gets the current resource's name.
   * @returns Resource name.
   */
  getCurrentResourceName(): string;

  /**
   * Checks if the code is running on the server.
   * @returns True if running on server, false otherwise.
   */
  isServer(): boolean;

  /**
   * Executes a registered server command.
   * @deprecated Use proper command APIs instead.
   * @param commandName Command string.
   */
  executeCommand(commandName: string): void;

  /**
   * Gets the current state of a resource.
   * @param resourceName The resource to check.
   * @returns Resource state as string.
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

  /**
   * Gets the current process uptime in milliseconds.
   * @returns Uptime in milliseconds.
   */
  getGameTimer(): number;
}

declare const mp: Mp;
