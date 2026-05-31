import type { MpClasses, MpGlobals } from '../out/game';
import type { MpCef } from './cef';
import type { MpDiscord } from './discord';
import type { MpEvents } from './events';
import type { MpGame } from './game';
import type { MpLocalStorage } from './local-storage';
import type { MpMeta } from './meta';
import type { MpVoiceChat } from './voice-chat';

type ServerVector3 = [number, number, number];
type ServerVector4 = [number, number, number, number];

/**
 * The main client-side manager interface for CyberMP.
 * Aggregates all core subsystems, network synchronization mappers, local entity spawning arrays, and launcher-level APIs.
 */
export interface MpClient {
  /**
   * Access interface for native game engines, classes, and global engine parameters.
   */
  game: MpGame & MpGlobals & MpClasses;

  /**
   * The client event communication system bridge.
   */
  events: MpEvents;

  /**
   * Metadata state synchronization manager across entities and network profiles.
   */
  meta: MpMeta;

  /**
   * Integrated structural client voice communication management interface.
   */
  voiceChat: MpVoiceChat;

  /**
   * Controls and interfaces with the embedded Chromium Embedded Framework web views.
   */
  cef: MpCef;

  /**
   * Provides access to Discord rich presence and authentications integration layers.
   */
  discord: MpDiscord;

  /**
   * Provides access to local key-value data storage states spanning resource restarts.
   */
  localStorage: MpLocalStorage;

  /**
   * Returns an array of game engine handling entities currently within the local player's streaming radius.
   * @param objName - The engine pool target class filter type to look up.
   * @returns An array containing the local runtime engine IDs matching the target pool.
   */
  getStreamedPool(
    objName: 'CVehicle' | 'CPed' | 'CPickup' | 'CObject',
  ): number[];

  /**
   * Gets an array containing all active remote network players currently streaming inside the local user's zone.
   * @returns An array of native game engine entity IDs.
   */
  getStreamedPlayers(): number[];

  /**
   * Resolves a network sync ID into its corresponding local native game engine entity reference handle for a vehicle.
   * @param id - The unique synchronization network ID assigned by the server host.
   * @returns The corresponding local native game engine vehicle handle ID.
   */
  getVehicleGameIdByNetworkId(id: number): number;

  /**
   * Resolves a network sync ID into its corresponding local native game engine entity reference handle for a player.
   * @param id - The unique synchronization network ID assigned by the server host.
   * @returns The corresponding local native game engine player handle ID.
   */
  getPlayerGameIdByNetworkId(id: number): number;

  /**
   * Resolves a network sync ID into its corresponding local native game engine entity reference handle for a static object.
   * @param id - The unique synchronization network ID assigned by the server host.
   * @returns The corresponding local native game engine object handle ID.
   */
  getObjectGameIdByNetworkId(id: number): number;

  /**
   * Translates a native vehicle game handle into its global shared replication network sync ID.
   * @param hash - The local native game engine entity instance handle.
   * @returns The synchronized network ID assigned to that vehicle.
   */
  getVehicleNetworkIdByGameId(hash: number): number;

  /**
   * Translates a native player character entity handle into its global shared replication network sync ID.
   * @param hash - The local native game engine entity instance handle.
   * @returns The synchronized network ID assigned to that player.
   */
  getPlayerNetworkIdByGameId(hash: number): number;

  /**
   * Translates a native object or entity prop handle into its global shared replication network sync ID.
   * @param hash - The local native game engine entity instance handle.
   * @returns The synchronized network ID assigned to that object.
   */
  getObjectNetworkIdByGameId(hash: number): number;

  /**
   * Translates a native pedestrian/NPC handle into its global shared replication network sync ID.
   * @param hash - The local native game engine entity instance handle.
   * @returns The synchronized network ID assigned to that pedestrian.
   */
  getPedNetworkIdByGameId(hash: number): number;

  /**
   * Resolves a network sync ID into its corresponding local native game engine entity reference handle for a pedestrian.
   * @param id - The unique synchronization network ID assigned by the server host.
   * @returns The corresponding local native game engine pedestrian handle ID.
   */
  getPedGameIdByNetworkId(hash: number): number;

  /**
   * Assigns the spawn coordinates and rotation tracking data for spawnLocalPlayer function.
   * @param x - Horizontal grid position coordinate value.
   * @param y - Vertical grid position coordinate value.
   * @param z - Height grid elevation coordinate value.
   * @param yaw - The horizontal rotation layout angle in degrees.
   */
  setSpawnDataLocalPlayer(x: number, y: number, z: number, yaw: number): void;

  /**
   * Spawns local player based on data setted by {@link setSpawnDataLocalPlayer}
   * @returns `true` if the spawn lifecycle sequence initiated successfully, otherwise `false`.
   */
  spawnLocalPlayer(): boolean;

  /**
   * Instantiates a localized ped entity.
   * This entity remains completely un-synchronized and invisible to other remote clients.
   * @param skinHash - Asset model signature key hash.
   * @param appHash - Visual appearance setup key components variation hash.
   * @param x - Horizontal coordinate space.
   * @param y - Vertical coordinate space.
   * @param z - Elevation height space coordinate.
   * @param yaw - Rotational alignment facing angle.
   * @param streaming - Controls if engine virtualization automatically handles streaming boundaries tracking.
   * @returns The resulting unique local game entity handle ID.
   */
  spawnLocalPed(
    skinHash: number | bigint,
    appHash: number | bigint,
    x: number,
    y: number,
    z: number,
    yaw: number,
    streaming: boolean,
  ): number;

  /**
   * Instantiates a localized vehicle entity inside the engine environment.
   * This entity remains completely un-synchronized and invisible to other remote clients.
   * @param skinHash - Asset model signature key hash.
   * @param appHash - Visual appearance setup key components variation hash.
   * @param x - Horizontal coordinate space.
   * @param y - Vertical coordinate space.
   * @param z - Elevation height space coordinate.
   * @param roll - Longitudinal rotation axis orientation angle.
   * @param pitch - Lateral rotation axis orientation angle.
   * @param yaw - Directional heading alignment angle.
   * @param streaming - Controls if engine virtualization automatically handles streaming boundaries tracking.
   * @returns The resulting unique local game entity handle ID.
   */
  spawnLocalVehicle(
    skinHash: number | bigint,
    appHash: number | bigint,
    x: number,
    y: number,
    z: number,
    roll: number,
    pitch: number,
    yaw: number,
    streaming: boolean,
  ): number;

  /**
   * Instantiates a localized world object or dynamic prop entity inside the engine environment.
   * This entity remains completely un-synchronized and invisible to other remote clients.
   * @param skinHash - Asset model signature key hash.
   * @param appHash - Visual appearance setup key components variation hash.
   * @param x - Horizontal coordinate space.
   * @param y - Vertical coordinate space.
   * @param z - Elevation height space coordinate.
   * @param roll - Longitudinal rotation axis orientation angle.
   * @param pitch - Lateral rotation axis orientation angle.
   * @param yaw - Directional heading alignment angle.
   * @param streaming - Controls if engine virtualization automatically handles streaming boundaries tracking.
   * @returns The resulting unique local game entity handle ID.
   */
  spawnLocalObject(
    skinHash: bigint | number,
    appHash: bigint | number,
    x: number,
    y: number,
    z: number,
    roll: number,
    pitch: number,
    yaw: number,
    streaming: boolean,
  ): number;

  /**
   * Forces immediate engine de-allocation and cleanup deletion maps targeting an isolated local pedestrian.
   * @param hash - Unique local game engine entity instance handle to clear.
   */
  despawnLocalPed(hash: number): void;

  /**
   * Forces immediate engine de-allocation and cleanup deletion maps targeting an isolated local vehicle.
   * @param hash - Unique local game engine entity instance handle to clear.
   */
  despawnLocalVehicle(hash: number): void;

  /**
   * Forces immediate engine de-allocation and cleanup deletion maps targeting an isolated local object.
   * @param hash - Unique local game engine entity instance handle to clear.
   */
  despawnLocalObject(hash: number): void;

  /**
   * Requests a secure Discord authentication OAuth2 user token via embedded client game SDK pathways.
   * @deprecated This method is unstable and may cause engine synchronization pauses. Use {@link getDiscordCodeAuthorization} instead.
   * @param discordAppId - The registered client registration application client ID string.
   * @returns Token string payload containing user authorization tokens.
   */
  getDiscordOAuth2Token(discordAppId: string): string;

  /**
   * Requests a preferred secure authentication application code payload via Discord's authorization flow.
   * @deprecated
   * @param discordAppId - The registered client registration application client ID string.
   * @param scopes - Separated validation permission request keyword groups strings (e.g., `"identify guilds"`).
   * @returns An authentication code string convertible into access tokens server-side.
   */
  getDiscordCodeAuthorization(discordAppId: string, scopes: string): string;

  /**
   * Returns the endpoint address configuration tracking string of the current server session.
   * @returns Endpoint routing connection destination details string (e.g., `"127.0.0.1:4430"`).
   */
  getCurrentServerEndpoint(): string;

  /**
   * Extracts the unique global player numeric index ID matching an active native local player entity handle.
   * @param playerHash - The target local engine character object handle tracking number.
   * @returns Network server-side entity tracking index ID number.
   */
  getPlayerServerId(playerHash: number): number;

  /**
   * Queries environment configuration arrays to fetch string system variable values defined inside config manifest structures.
   * @param varName - Target environmental variable path identifier name key string.
   * @returns The corresponding variable value matching that name string.
   */
  getVar(varName: string): string;

  /**
   * Queries environment configuration arrays to fetch integer variable values defined inside config manifest structures.
   * @param varName - Target environmental variable path identifier name key string.
   * @returns The variable evaluation value parsed into a numerical integer.
   */
  getVarInt(varName: string): number;

  /**
   * Retrieves total execution duration elapsed since initialization of the master game engine shell layer tracking loops.
   * @returns Calculated time tracker measurement value in milliseconds.
   */
  getGameTimer(): number;

  /**
   * Fetches raw unparsed configurations mapping platform launcher operational states.
   * @returns Unparsed JSON payload string representing client settings configurations.
   */
  getLauncherSettingsJSON(): string;

  /**
   * Fetches parsed layout profiles tracking core client options configurations.
   * @returns Object tracking client properties choices.
   */
  getLauncherSettings(): any;

  /**
   * Registers a callback execution function that runs continuously on every game engine render frame.
   * @param cb - The logic routine executed on every render cycle.
   * @returns An execution identifier handle index required to disable the execution loop later.
   */
  setTick(cb: () => any): number;

  /**
   * Removes and unbinds an active rendering cycle tracking loop execution block.
   * @param tickId - The original registration index key returned by {@link setTick}.
   */
  clearTick(tickId: number): void;
}
