import type * as CyberEnums from '../enums';
import type { MpClasses, Vector3 } from '../game';

type OverrideFunction = <
  C extends keyof MpClasses,
  I extends UnwrapClass<MpClasses[C]>,
  M extends keyof I extends never ? string : keyof I,
>(
  className: C,
  methodName: M,
  callback: (
    self: I,
    ...args: [...Parameters<I[M]>, origin: I[M]]
  ) => ReturnType<I[M]>,
) => void;

type ObserveFunction = <
  C extends keyof MpClasses,
  I extends UnwrapClass<MpClasses[C]>,
  M extends keyof I extends never ? string : keyof I,
>(
  className: C,
  methodName: M,
  callback: (self: I, ...args: Parameters<I[M]>) => void,
) => void;

interface TweakDB {
  getRecords<T = any>(str: string): T[];
  getRecord<T = any>(str: string): T;
  query(str: string): string[];
  getFlat<T = any>(str: string): T;
  setFlats(str: string, arr: any[]): boolean;
  setFlat(str: string, obj: any): boolean;
  setFlatNoUpdate(str: string, obj: any): boolean;
  updateRecord(str: string): boolean;
  createRecord(key: string, value: string): boolean;
}

interface CyberMP {
  /**
   * Removes game object classes (e.g., T extends gameObject, playerPuppet, NpcPuppet) from the map.
   * @param objectClassMap Array of class names to delete.
   */
  DeclareDeletedObjects(objectClassMap: Array<keyof MpClasses>): void;

  /**
   * Removes game objects by their unique hashes from the map.
   * @param objectHashMap Array of unique game object hashes to delete.
   */
  DeletedObjectsByUniqueHash(objectHashMap: string[]): void;

  /**
   * Enables or disables synchronization of default effects, as defined by the CyberMP platform.
   * @param value Whether to use the default effects.
   */
  UseDefaultEffectsByPlatform(value: boolean): void;

  SetDefaultSpawnPosition(position: Vector3, yaw: number): void;
}

import '../game.d.ts';

declare module '../game.d.ts' {
  export interface worldWeatherScriptInterface extends IScriptable {
    SetWeather(
      weather: CyberEnums.EWeatherState,
      blendTime?: number,
      priority?: number,
    ): void;
    ResetWeather(forceRestore?: boolean, blendTime?: number): void;
    GetWeatherState(): worldWeatherState;
    GetEnvironmentDefinition(): worldEnvironmentDefinition;
  }

  export interface vehicleBaseObject extends gameObject {
    HasGravity(): boolean;
    EnableGravity(enable: boolean): boolean;
    AddLinelyVelocity(velocity: Vector3, angularVelocity: Vector3): boolean;
    ChangeLinelyVelocity(
      velocity: Vector3,
      angularVelocity: Vector3,
      switchIndex: number,
    ): boolean;
    GetVelocity(): Vector3;
    GetAngularVelocity(): Vector3;
    GetPhysicsState(): number;
    IsOnGround(): boolean;
    GetBoundaryBox(): Box;
    VehicleOwnerWasChanged(): void;
  }

  export interface gameMappinSystem extends gamemappinsIMappinSystem {
    TrackMappin(id: gameNewMappinID): void;
  }

  type OnlyExtendingScriptableSystem<T> = {
    [K in keyof T as T[K] extends typeof gameScriptableSystem
      ? K
      : never]: T[K];
  };

  export interface gameScriptableSystemsContainer<
    Map = OnlyExtendingScriptableSystem<MpClasses>,
  > {
    Get<N extends keyof Map>(systemName: N): UnwrapClass<Map[N]>;
  }

  export namespace ScriptGameInstance {
    export function GetLoadingScreenSystem(): LoadingScreenSystem;
  }

  export class LoadingScreenSystem {
    GetLoadingScreenState(): CyberEnums.ELoadingScreenState;
    GetLoadingScreenProgress(): number;
    OnLoadingScreenStateChange(newState: CyberEnums.ELoadingScreenState): void;
  }

  export interface inkISystemRequestsHandler {
    StartMainMenu(): void;
  }

  export interface gameuiICharacterCustomizationSystem {
    SetPlayerGender(gender: CyberEnums.EPlayerGender, savedPos?: boolean): void;
    OnPlayerGenderChanged(gender: CyberEnums.EPlayerGender): void;
  }

  export interface MpClasses {
    LoadingScreenSystem: typeof LoadingScreenSystem;
  }

  export interface MpGame {
    CyberMP: CyberMP;
    TweakDB: TweakDB;

    onInputKeyEvent(
      callback: (
        action: CyberEnums.EInputAction,
        key: CyberEnums.EInputKey,
      ) => void,
    ): void;

    getDisplayResolution(): [width: number, height: number];

    /**
     * Event when the game is started.
     */
    onGameLoaded(callback: () => void): void;

    /**
     * Event when tweaks is loaded.
     */
    onTweak(callback: () => void): void;

    /**
     * Event when tweaks is loaded.
     */
    onInit(callback: () => void): void;

    /**
     * Event when local player has been spawned.
     */
    onLocalPlayerSpawned(callback: () => void): void;

    /**
     * Get singleton.
     */
    getSingleton<T extends keyof MpClasses>(name: T): UnwrapClass<MpClasses[T]>;

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

    /**
     * Overrides method function inside selected class.
     * @param className Class name
     * @param methodName Method name inside of class
     * @param {selfFunction} func Function to override instead
     */
    override: OverrideFunction;

    /**
     * Observes method inside selected class.
     * @param className Class name
     * @param methodName Method name inside of class
     * @param {selfFunction} callback Callback of method function.
     */
    observeAfter: ObserveFunction;

    /**
     * Observes method inside selected class.
     * @param className Class name
     * @param methodName Method name inside of class
     * @param {selfFunction} callback Callback of method function.
     */
    observeBefore: ObserveFunction;

    /**
     * Alias for {@link observeBefore}.
     * @param className Class name
     * @param methodName Method name inside of class
     * @param {selfFunction} callback Callback of method function.
     */
    observe: ObserveFunction;

    /**
     * Observes method inside selected class. Can only call methods from {@link MpGame}.
     * Should be used when it's important for the function to execute quickly (as fast as V8 allows).
     * @param className Class name
     * @param methodName Method name inside of class
     * @param {selfFunction} callback Callback of method function.
     */
    observeAfterRaw: ObserveFunction;

    /**
     * Observes method inside selected class. Can only call methods from {@link MpGame}.
     * Should be used when it's important for the function to execute quickly (as fast as V8 allows).
     * @param className Class name
     * @param methodName Method name inside of class
     * @param {selfFunction} callback Callback of method function.
     */
    observeBeforeRaw: ObserveFunction;

    /**
     * Alias for {@link observeBeforeRaw}.
     * @param className Class name
     * @param methodName Method name inside of class
     * @param {selfFunction} callback Callback of method function.
     */
    observeRaw: ObserveFunction;

    toVariant<R = Record<string, unknown>>(obj: any, str: string): R;
    fromVariant<R = any>(obj: any): R;
  }
}
