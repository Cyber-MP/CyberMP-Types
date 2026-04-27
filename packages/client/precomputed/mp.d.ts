import type { MpGame } from '../out/game';
import type { MpCef } from './cef';
import type { MpDiscord } from './discord';
import type { MpEvents } from './events';
import type { MpLocalStorage } from './local-storage';
import type { MpMeta } from './meta';
import type { MpVoiceChat } from './voice-chat';

type ServerVector3 = [number, number, number];
type ServerVector4 = [number, number, number, number];

export interface MpClient {
  game: MpGame;
  events: MpEvents;
  meta: MpMeta;
  voiceChat: MpVoiceChat;
  cef: MpCef;
  discord: MpDiscord;
  localStorage: MpLocalStorage;

  getStreamedPool(
    objName: 'CVehicle' | 'CPed' | 'CPickup' | 'CObject',
  ): number[];
  getStreamedPlayers(): number[];

  /**
   * Mapping between network and game IDs.
   */
  getVehicleGameIdByNetworkId(id: number): number;

  getPlayerGameIdByNetworkId(id: number): number;

  getObjectGameIdByNetworkId(id: number): number;

  getVehicleNetworkIdByGameId(hash: number): number;

  getPlayerNetworkIdByGameId(hash: number): number;

  getObjectNetworkIdByGameId(hash: number): number;

  getPedNetworkIdByGameId(hash: number): number;

  getPedGameIdByNetworkId(hash: number): number;

  /**
   * Local player spawning API.
   */
  setSpawnDataLocalPlayer(x: number, y: number, z: number, yaw: number): void;

  spawnLocalPlayer(): boolean;

  /**
   * Spawn local-only entities (not synced).
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

  despawnLocalPed(hash: number): void;

  despawnLocalVehicle(hash: number): void;

  despawnLocalObject(hash: number): void;

  /**
   * Get Discord token via game SDK (unstable).
   */
  getDiscordOAuth2Token(discordAppId: string): string;

  /**
   * Get Discord auth code (preferred).
   */
  getDiscordCodeAuthorization(discordAppId: string, scopes: string): string;

  /**
   * Returns current server IP:PORT string.
   */
  getCurrentServerEndpoint(): string;

  /**
   * Get server ID from player hash.
   */
  getPlayerServerId(playerHash: number): number;

  /**
   * Get src variable value as string.
   */
  getVar(varName: string): string;

  /**
   * Get console variable value as integer.
   */
  getVarInt(varName: string): number;

  /**
   * Returns time in ms since game start.
   */
  getGameTimer(): number;

  getLauncherSettingsJSON(): string;

  getLauncherSettings(): any;

  setTick(cb: () => any): number;

  clearTick(tickId: number): void;
}
