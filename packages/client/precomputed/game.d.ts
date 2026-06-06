import type * as CyberEnums from '../out/enums';
import type {
  Box,
  EulerAngles,
  entMorphTargetWeightEntry,
  MpClasses,
  Vector3,
} from '../out/game';

/**
 * Extracts the instance type from a class constructor type, or returns the type itself if it is not a constructor.
 * @template T - The type to unwrap.
 * @internal
 */
type UnwrapClass<T> = T extends { new (): infer U } ? U : T;

/**
 * @internal
 */
type AnyFunc = (...args: any[]) => any;

/**
 * @internal
 */
type SafeMethod<I, M extends keyof I> = I[M] extends AnyFunc ? I[M] : AnyFunc;

/**
 * Defines a function signature used to completely override a method within a specified game class.
 * The callback receives the instance (`self`), the original arguments, and the original method implementation as the final parameter.
 * @template C - The class name key from `MpClasses`.
 * @template I - The resolved instance type of the class.
 * @template M - The method names available on the class instance.
 */
export type OverrideFunction = <
  C extends keyof MpClasses,
  I extends UnwrapClass<MpClasses[C]>,
  M extends keyof I,
>(
  className: C,
  methodName: M,
  callback: (
    self: I,
    ...args: [...Parameters<SafeMethod<I, M>>, origin: SafeMethod<I, M>]
  ) => ReturnType<SafeMethod<I, M>>,
) => void;

/**
 * Defines a function signature used to observe (hook into) a method within a specified game class.
 * The callback receives the instance (`self`) and the arguments passed to the method.
 * @template C - The class name key from `MpClasses`.
 * @template I - The resolved instance type of the class.
 * @template M - The method names available on the class instance.
 */
export type ObserveFunction = <
  C extends keyof MpClasses,
  I extends UnwrapClass<MpClasses[C]>,
  M extends keyof I,
>(
  className: C,
  methodName: M,
  callback: (self: I, ...args: Parameters<SafeMethod<I, M>>) => void,
) => void;

/**
 * Interface for interacting with the game's TweakDB database.
 * TweakDB contains static game data, tweaks, and entity configurations.
 * @category Natives
 */
export interface TweakDB {
  /**
   * Retrieves an array of records matching a specific query or record type.
   * @template T - The expected type of the records.
   * @param str - The TweakDB record path or type identifier.
   * @returns An array of matching records.
   */
  getRecords<T = any>(str: string): T[];

  /**
   * Retrieves a single record from TweakDB.
   * @template T - The expected type of the record.
   * @param str - The specific TweakDB ID or path string.
   * @returns The requested record.
   */
  getRecord<T = any>(str: string): T;

  /**
   * Queries TweakDB paths and returns matching entry keys.
   * @param str - The search or query pattern string.
   * @returns An array of matching string IDs.
   */
  query(str: string): string[];

  /**
   * Retrieves a "flat" property value directly from TweakDB.
   * @template T - The expected type of the flat property.
   * @param str - The path to the flat property (e.g., "Items.SomeItem.someProperty").
   * @returns The flat property value.
   */
  getFlat<T = any>(str: string): T;

  /**
   * Overwrites an array flat property in TweakDB and updates the engine immediately.
   * @param str - The path to the flat property.
   * @param arr - The new array of values to assign.
   * @returns `true` if the operation was successful, otherwise `false`.
   */
  setFlats(str: string, arr: any[]): boolean;

  /**
   * Overwrites a single flat property value in TweakDB and updates the engine immediately.
   * @param str - The path to the flat property.
   * @param obj - The new value to assign.
   * @returns `true` if the operation was successful, otherwise `false`.
   */
  setFlat(str: string, obj: any): boolean;

  /**
   * Overwrites a flat property value in TweakDB *without* triggering an immediate engine update.
   * Useful when batching multiple TweakDB edits before a manual refresh.
   * @param str - The path to the flat property.
   * @param obj - The new value to assign.
   * @returns `true` if the operation was successful, otherwise `false`.
   */
  setFlatNoUpdate(str: string, obj: any): boolean;

  /**
   * Forces the engine to re-read and update a specific record from its current TweakDB state.
   * @param str - The path to the record to update.
   * @returns `true` if the update succeeded, otherwise `false`.
   */
  updateRecord(str: string): boolean;

  /**
   * Runtime creates a new TweakDB record.
   * @param key - The new record identifier key.
   * @param value - The record blueprint or type definition key.
   * @returns `true` if creation succeeded, otherwise `false`.
   */
  createRecord(key: string, value: string): boolean;
}

/**
 * Utility interface providing bidirectional translation between readable game engine naming string conventions
 * and their encrypted/hashed formats.
 * @category Natives
 */
export interface MpGameHashes {
  /**
   * Converts a TweakDB record string path into its unique TweakDBID hash signature format.
   * @param name - The text record path string (e.g., `"Items.money"`).
   * @returns The resolved TweakDBID hash string reference.
   */
  toTweakdbid(name: string): string;

  /**
   * Resolves an internal TweakDBID hash signature string back into its original readable record path string.
   * @param hash - The native TweakDBID hash layout signature.
   * @returns The readable path text description string if found, otherwise an empty or fallback string representation.
   */
  fromTweakdbid(hash: string): string;

  /**
   * Resolves a resource file route or asset system address string into its designated numeric/hexadecimal Resource Reference (`ResRef`) signature hash.
   * @param name - The full system asset path string (e.g., `"base\\characters\\main_npc\\jackie.ent"`).
   * @returns The matching native ResRef serialization target hash key.
   */
  toResref(name: string): string;

  /**
   * Translates a native game engine Resource Reference (`ResRef`) asset identifier string back into its readable raw directory path string.
   * @param hash - The target ResRef hash format token layout string.
   * @returns The verified asset resource string path.
   */
  fromResref(hash: string): string;

  /**
   * Converts a standard text identifier string into its corresponding internal engine unique 64-bit string identifier (`CName`) hash representation.
   * @param name - The plaintext string label configuration name to translate.
   * @returns The matching numeric engine structure string token representation.
   */
  toCname(name: string): string;

  /**
   * Reverses a native engine 64-bit name identification token identifier (`CName`) back into its human-readable plaintext string label.
   * @param hash - The string representation of the target CName identifier.
   * @returns The corresponding unhashed string literal value.
   */
  fromCname(hash: string): string;
}

/**
 * Custom CyberMP System managing asset deletion maps, and basic spawn configurations.
 * Accessible through `mp.game.ScriptGameInstance.GetMultiplayerSystem()`
 * @category Natives
 */
export class MultiplayerSystem {
  /**
   * Removes game object classes (e.g., `GameObject`, `Door`) from the active multiplayer map state.
   * @param objectClassMap - Array of class names from `MpClasses` to clear.
   */
  DeclareDeletedObjects(objectClassMap: Array<keyof MpClasses>): void;

  /**
   * Removes specific game objects from the network replication map using their unique hash keys.
   * @param objectHashMap - Array of unique entity hashes to delete.
   */
  DeletedObjectsByUniqueHash(objectHashMap: string[]): void;

  /**
   * Enables or disables synchronization of default game effects, as defined by the CyberMP platform.
   * @param value - `true` to utilize default synchronization effects, `false` to disable them.
   */
  UseDefaultEffectsByPlatform(value: boolean): void;

  /**
   * Sets the initial default coordinate and orientation fallback position when spawning players.
   * @param position - The 3D coordinates vector.
   * @param yaw - The horizontal rotation (yaw angle) in degrees/radians.
   */
  SetDefaultSpawnPosition(position: Vector3, yaw: number): void;
}

/**
 * System providing status and progression access for the game's loading screen interface.
 * Accessible through `mp.game.ScriptGameInstance.GetLoadingScreenSystem()`
 * @category Natives
 */
export class LoadingScreenSystem {
  /**
   * Retrieves the current explicit state of the loading screen lifecycle.
   * @returns The state enum value.
   */
  GetLoadingScreenState(): CyberEnums.ELoadingScreenState;

  /**
   * Gets the numeric loading progression factor.
   * @returns A value representing loading progress (from 0 to 100).
   */
  GetLoadingScreenProgress(): number;

  /**
   * Callback fired or invoked when the loading screen switches states.
   * @param newState - The new incoming loading screen state enum value.
   */
  OnLoadingScreenStateChange(newState: CyberEnums.ELoadingScreenState): void;
}

/**
 * Core CyberMP Game Interface linking subsystem instances, runtime overrides, using game natives, engine callbacks, and engine utility tasks.
 */
export interface MpGame {
  /**
   * The global interface instance for TweakDB manipulation.
   */
  TweakDB: TweakDB;

  /**
   * Utility interface providing bidirectional translation between readable game engine naming string conventions
   * and their encrypted/hashed formats.
   */
  hashes: MpGameHashes;

  /**
   * Registers a callback listener tracking real-time keyboard or controller hardware input events.
   * @param callback - Function invoked on keystrokes.
   */
  onInputKeyEvent(
    callback: (
      action: CyberEnums.EInputAction,
      key: CyberEnums.EInputKey,
    ) => void,
  ): void;

  /**
   * Gets the rendering dimensions of the active screen display.
   * @returns A tuple format containing `[width, height]` in pixels.
   */
  getDisplayResolution(): [width: number, height: number];

  /**
   * Event hook that fires immediately when the underlying game session finishes initial loading structures.
   * @param callback - Execution callback.
   */
  onGameLoaded(callback: () => void): void;

  /**
   * Event hook that fires ONCE immediately when the underlying game session finishes initial loading structures.
   * @param callback - Execution callback.
   */
  onceGameLoaded(callback: () => void): void;

  /**
   * Event hook that fires specifically when tweaks and TweakDB engine patches are loaded and safe to manipulate.
   * @param callback - Execution callback.
   */
  onTweak(callback: () => void): void;

  /**
   * Event hook triggered during early initialization phase of the modding script runtime container.
   * @param callback - Execution callback.
   */
  onInit(callback: () => void): void;

  /**
   * Event hook that triggers immediately after the local user's player character object spawns in the world space.
   * @param callback - Execution callback.
   */
  onLocalPlayerSpawned(callback: () => void): void;

  /**
   * Resolves and fetches an engine singleton class reference safely.
   * @template T - The specific key class identifier inside `MpClasses`.
   * @param name - The name identifier string of the singleton.
   * @returns The active unwrapped instance object of that designated class.
   */
  getSingleton<T extends keyof MpClasses>(name: T): UnwrapClass<MpClasses[T]>;

  /**
   * Directly injects or appends an item template into the player's primary inventory framework.
   * @param itemName - The specific TweakDB string ID of the item.
   * @param count - Total item quantity stack to add.
   */
  AddToInventory(itemName: string, count: number): void;

  /**
   * Fully replaces a targeted class method with custom script logic.
   * @see {@link OverrideFunction}
   */
  override: OverrideFunction;

  /**
   * Hooks an observation callback that runs immediately **after** the target native class method executes.
   * @see {@link ObserveFunction}
   */
  observeAfter: ObserveFunction;

  /**
   * Hooks an observation callback that runs immediately **before** the target native class method executes.
   * @see {@link ObserveFunction}
   */
  observeBefore: ObserveFunction;

  /**
   * Standard alias hook pointing to {@link observeBefore}. Evaluates logic prior to core target execution.
   * @see {@link ObserveFunction}
   */
  observe: ObserveFunction;

  /**
   * Observes a method inside a selected class after execution. Can only invoke methods native to {@link MpGame}.
   * Should be used when it is crucial for performance that the function executes as fast as V8 allows.
   * @see {@link ObserveFunction}
   */
  observeAfterRaw: ObserveFunction;

  /**
   * Observes a method inside a selected class before execution. Can only invoke methods native to {@link MpGame}.
   * Should be used when it is crucial for performance that the function executes as fast as V8 allows.
   * @see {@link ObserveFunction}
   */
  observeBeforeRaw: ObserveFunction;

  /**
   * Standard alias hook pointing to {@link observeBeforeRaw}. Evaluates high-performance raw logic prior to execution.
   * @see {@link ObserveFunction}
   */
  observeRaw: ObserveFunction;

  /**
   * Serializes a JavaScript runtime payload object structural value into a native engine container format (`Variant`).
   * @template R - The expected return typing output blueprint shape.
   * @param obj - Target entity object structure to convert.
   * @param str - Native structural reflection mapping blueprint name string.
   * @returns The wrapped engine reference asset layout structure.
   */
  toVariant<R = Record<string, unknown>>(obj: any, str: string): R;

  /**
   * Deserializes a native engine container structure layout (`Variant`) back into raw accessible JavaScript object values.
   * @template R - The expected target JavaScript shape format.
   * @param obj - Variant payload container input from the game engine.
   * @returns The unwrapped JavaScript object structure data.
   */
  fromVariant<R = any>(obj: any): R;
}

/**
 * Extended by CyberMP `inkISystemRequestsHandler` class
 * @category Natives
 */
export interface extended__inkISystemRequestsHandler {
  /**
   * Forces the UI context architecture to navigate back out into the main landing splash screen.
   */
  StartMainMenu(): void;
}

/**
 * Extended by CyberMP `entEntity` class
 * @category Natives
 */
interface extended__entEntity {
  /**
   * Obtains lists specifying explicit weight indexes controlling facial custom blendshapes or structural targets.
   * @returns Array listing mesh blend weights structures.
   */
  GetMorphWeights(): entMorphTargetWeightEntry[];

  /**
   * Forces the entity container model frame structural layers to assemble and update via selected visual components arrays.
   * @param arr - List containing components structures to attach.
   */
  ReassembleWithComponents(arr: entIComponent[]): void;

  /**
   * Teleports a physical game object / Pedestrian directly to specific vector coordinates.
   * @param position - Target 3D destination coordinate vector.
   * @param rotation - Optional Euler orientation layout coordinates (Pitch, Roll, Yaw).
   */
  TeleportPed(position: Vector3, rotation?: EulerAngles): void;
}

/**
 * Extended by CyberMP `gameuiICharacterCustomizationSystem` class
 * @category Natives
 */
interface extended__gameuiICharacterCustomizationSystem {
  /**
   * Updates player's gender state representation variables directly inside system profiles.
   * @param gender - Target gender enum identifier asset option.
   * @param savedPos - Optional parameter to persist or retain vector frame state context layout positions.
   */
  SetPlayerGender(gender: CyberEnums.EPlayerGender, savedPos?: boolean): void;

  /**
   * Callback fired immediately following successful adjustments to player character gender states.
   * @param gender - The incoming target modified gender enumeration value.
   */
  OnPlayerGenderChanged(gender: CyberEnums.EPlayerGender): void;
}

/**
 * Extended by CyberMP `worldWeatherScriptInterface` class
 * @category Natives
 */
interface extended__worldWeatherScriptInterface {
  /**
   * Commands the environment engine manager to override active weather profiles.
   * @param weather - The weather enum state or specific profile asset name path string.
   * @param blendTime - Optional transition timeline sequence parameter in seconds.
   * @param priority - Optional overlay layer sorting stack index weight level identifier.
   * @returns `true` if weather override commands executed, otherwise `false`.
   */
  SetWeather(
    weather: CyberEnums.EWeatherState,
    blendTime?: number,
    priority?: number,
  ): boolean;

  /**
   * Clears ongoing script-driven environmental alterations and returns to automated weather loops.
   * @param forceRestore - Optional flag bypass to drop timelines and clear immediately.
   * @param blendTime - Optional transition timeline layout duration in seconds.
   * @returns `true` if successfully reset, otherwise `false`.
   */
  ResetWeather(forceRestore?: boolean, blendTime?: number): boolean;
}

/**
 * Extended by CyberMP `vehicleBaseObject` class
 * @category Natives
 */
interface extended__vehicleBaseObject {
  /**
   * Confirms whether gravity properties are currently influencing the physical vehicle entity.
   * @returns `true` if gravity calculations are active, otherwise `false`.
   */
  HasGravity(): boolean;

  /**
   * Enables or disables physics engine gravity forces on this vehicle.
   * @param enable - `true` to apply normal downforce gravity, `false` to disable.
   * @returns `true` if state adjusted successfully.
   */
  EnableGravity(enable: boolean): boolean;

  /**
   * Imparts instantaneous raw linear velocity vector impulses into the structural entity coordinates frame.
   * @param velocity - Linear velocity vector forces factor.
   * @param angularVelocity - Angular momentum spinning forces vector.
   * @returns `true` if impulse registers onto object layers.
   */
  AddLinelyVelocity(velocity: Vector3, angularVelocity: Vector3): boolean;

  /**
   * Explicitly sets or resets the exact speed vectors tracking ongoing object momentum.
   * @param velocity - Target directional speed vector values coordinates.
   * @param angularVelocity - Target rotational angular values coordinates.
   * @param switchIndex - Index configuration selection identifier flag.
   * @returns `true` if velocity state fields successfully updated.
   */
  ChangeLinelyVelocity(
    velocity: Vector3,
    angularVelocity: Vector3,
    switchIndex: number,
  ): boolean;

  /**
   * Retrieves the ongoing linear velocity vectors representing forward/lateral speed momentum.
   * @returns Directional speed coordinate matrix vector tracking values.
   */
  GetVelocity(): Vector3;

  /**
   * Retrieves the current rotation speed vector parameters tracking operational values.
   * @returns Rotational velocity tracking data vector.
   */
  GetAngularVelocity(): Vector3;

  /**
   * Retrieves the physics engine simulation state mask flags from the object tracking loop.
   * @returns Numeric evaluation bitmask tracking active states.
   */
  GetPhysicsState(): number;

  /**
   * Checks whether the vehicle tires or frame base are actively making physical contact with terrain/surfaces.
   * @returns `true` if supported on terrain boundaries, otherwise `false`.
   */
  IsOnGround(): boolean;

  /**
   * Retrieves structural bounding box spatial calculation variables for collision tracking.
   * @returns Object bounding structural frame dimensional properties limits.
   */
  GetBoundaryBox(): Box;

  /**
   * Callback fired or called manually when the driving authority or network owner ID of this vehicle shifts.
   */
  VehicleOwnerWasChanged(): void;
}

/**
 * Extended by CyberMP `gameMappinSystem` class
 * @category Natives
 */
interface extended__gameMappinSystem {
  /**
   * Pins or tracks a UI map indicator landmark tracking profile target pathing point.
   * @param id - Unique mapping ID parameter identifier structure.
   */
  TrackMappin(id: gameNewMappinID): void;
}

import '../out/game';

declare module '../out/game' {
  interface worldWeatherScriptInterface {
    SetWeather(
      weather: CyberEnums.EWeatherState,
      blendTime?: number,
      priority?: number,
    ): boolean;
    ResetWeather(forceRestore?: boolean, blendTime?: number): boolean;
  }

  interface vehicleBaseObject extends extended__vehicleBaseObject {}

  interface gameMappinSystem extends extended__gameMappinSystem {}

  type OnlyExtendingScriptableSystem<T> = {
    [K in keyof T as T[K] extends typeof gameScriptableSystem
      ? K
      : never]: T[K];
  };

  interface gameScriptableSystemsContainer<
    Map = OnlyExtendingScriptableSystem<MpClasses>,
  > {
    Get<N extends keyof Map>(systemName: N): UnwrapClass<Map[N]>;
  }

  namespace ScriptGameInstance {
    export function GetLoadingScreenSystem(): LoadingScreenSystem;
    export function GetMultiplayerSystem(): MultiplayerSystem;
  }

  interface inkISystemRequestsHandler
    extends extended__inkISystemRequestsHandler {}

  interface gameuiICharacterCustomizationSystem
    extends extended__gameuiICharacterCustomizationSystem {}

  interface entEntity extends extended__entEntity {}

  interface MpClasses {
    LoadingScreenSystem: typeof LoadingScreenSystem;
    MultiplayerSystem: typeof MultiplayerSystem;
  }
}
