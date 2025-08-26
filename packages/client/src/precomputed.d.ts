/// <reference path="./enums.d.ts" />
/// <reference path="./bitfields.d.ts" />
/// <reference path="./index.d.ts" />

type UnwrapMpClass<T> = T extends { new (): infer U } ? U : T;
type CName = string;
type Handle<T = any> = T;
type WeakHandle<T = any> = T;
type ScriptRef<T = any> = T;
type NodeRef<T = any> = T;
type TweakDBID = string;
type CRUID = any;
type CGUID = any;
type Variant = any;
type LocalizationString = string;
type Uint16 = number;
type Uint8 = number;
type Int8 = number;
type Int16 = number;
type Int32 = number;
type DataBuffer = any;
type serializationDeferredDataBuffer = any;
type SharedDataBuffer = any;
type EditorObjectID = any;
type MessageResourcePath = any;
type ResAsyncRef<T> = T;
type CurveData<T> = T;
type ResRef<T> = T;
type MultiChannelCurve<T> = T;

declare interface MpEvents {
  /**
   * Register a custom event listener.
   * @param eventName Name of the event.
   * @param func Callback function.
   */
  on(eventName: string, func: (...args: any[]) => void): void;

  /**
   * UnRegister a custom event listener.
   * @param eventName Name of the event.
   * @param func Callback function.
   */
  off(eventName: string, func: (...args: any[]) => void): void;

  /**
   * Emit a previously registered custom event.
   *
   * @param eventName Name of the event.
   * @param args Arguments to pass.
   */
  emit(eventName: string, ...args: any[]): void;

  /**
   * Register a listener for server event on client.
   */
  onServer(eventName: string, callback: (...args: any[]) => void): void;

  /**
   * Emit an event to the server.
   */
  emitServer(eventName: string, ...args: any[]): void;

  /**
   * Emit an event to the cef.
   */
  emitCef(eventName: string, ...args: any[]): void;

  /**
   * Register a custom cef event listener.
   * @param eventName Name of the event.
   * @param func Callback function.
   */
  onCef(eventName: string, func: (...args: any[]) => void): void;

  /**
   * Register a command in the client scope.
   * @param commandName Command name without "/".
   * @param func Callback with id and args.
   */
  addCommand(
      commandName: string,
      func: (id: number, args: string[]) => void,
  ): void;
}

declare interface MpGlobalPrecomputed {
  /**
   * Focus or unfocus CEF view.
   */
  setCefInFocusState(justFocus: boolean, withMouse: boolean): void;

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
  setSpawnDataLocalPlayer(
      modelHash: number,
      x: number,
      y: number,
      z: number,
      yaw: number
  ): void;

  spawnLocalPlayer(): boolean;

  /**
   * Spawn local-only entities (not synced).
   */
  spawnLocalPed(
      skinHash: number,
      appHash: number,
      x: number,
      y: number,
      z: number,
      yaw: number,
      streaming: boolean
  ): number;

  spawnLocalVehicle(
      skinHash: number,
      appHash: number,
      x: number,
      y: number,
      z: number,
      roll: number,
      pitch: number,
      yaw: number,
      streaming: boolean
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
      streaming: boolean
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
   * Get console variable value as string.
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
}

declare interface MpGamePrecomputed {
  /**
   * Method to retrieve input events.
   */
  onInputKeyEvent(
      callback: (
          action: CyberEnums.EInputAction,
          key: CyberEnums.EInputKey
      ) => void
  ): void;

  /**
   * Event when the game is started.
   */
  onGameLoaded(callback: () => void): void;

  /**
   * Event when tweaks is loaded.
   */
  onTweak(callback: () => void): void;

  /**
   * Event when local player has been spawned.
   */
  onLocalPlayerSpawned(callback: () => void): void;

  /**
   * Get singleton.
   */
  getSingleton<T extends keyof MpClasses>(name: T): UnwrapMpClass<MpClasses[T]>;

  /**
   * Add something to inventory.
   */
  AddToInventory(itemName: string, count: number): void;

  /**
   * Returns model hash convertable to number.
   * @param name Model name
   * @param type Model name type
   * @returns Model hash
   */
  getHashFromName(name: string, type: 'tweakdbid' | 'cname'): string;
}
