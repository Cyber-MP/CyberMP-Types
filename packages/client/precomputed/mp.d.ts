import type { MpClasses, MpGlobals } from '../out/game';
import type { MpCef } from './cef';
import type { MpCommands } from './commands';
import type { MpDiscord } from './discord';
import type { MpEvents } from './events';
import type { MpExports } from './exports';
import type { MpGame } from './game';
import type { MpLocal } from './local';
import type { MpLocalStorage } from './local-storage';
import type { MpMeta } from './meta';
import type { MpNetwork } from './network';
import type { MpResources } from './resources';
import type { MpVoiceChat } from './voice-chat';

type ServerVector3 = [number, number, number];
type ServerVector4 = [number, number, number, number];

/**
 * The main client-side manager interface for CyberMP.
 * Aggregates all core subsystems, network synchronization mappers, local entity spawning arrays, and game-level APIs.
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
   * Provides networking and entity synchronization utilities
   */
  network: MpNetwork;

  /**
   * Manages local player lifecycle operations and the creation of client-side entities.
   */
  local: MpLocal;

  /**
   * Manages the registration, handling, and unregistration of runtime client console commands.
   */
  commands: MpCommands;

  /**
   * Provides access to local key-value data storage states spanning resource restarts.
   */
  localStorage: MpLocalStorage;

  /**
   * Interface managing cross-resource execution pipelines.
   */
  exports: MpExports;

  /**
   * Interface for managing, loading, and tracking resources.
   */
  resources: MpResources;

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
