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
 * @ignore
 */
type UnwrapClass<T> = T extends { new (): infer U } ? U : T;

/**
 * Defines a function signature used to completely override a method within a specified game class.
 * The callback receives the instance (`self`), the original arguments, and the original method implementation as the final parameter.
 * @template C - The class name key from `MpClasses`.
 * @template I - The resolved instance type of the class.
 * @template M - The method names available on the class instance.
 * @internal
 */
export type OverrideFunction = <
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

/**
 * Defines a function signature used to observe (hook into) a method within a specified game class.
 * The callback receives the instance (`self`) and the arguments passed to the method.
 * @template C - The class name key from `MpClasses`.
 * @template I - The resolved instance type of the class.
 * @template M - The method names available on the class instance.
 * @internal
 */
export type ObserveFunction = <
  C extends keyof MpClasses,
  I extends UnwrapClass<MpClasses[C]>,
  M extends keyof I extends never ? string : keyof I,
>(
  className: C,
  methodName: M,
  callback: (self: I, ...args: Parameters<I[M]>) => void,
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
 * System managing core multiplayer session synchronization, asset deletion maps, and basic spawn configurations.
 * @category Natives
 */
export class MultiplayerSystem {
  /**
   * Removes game object classes (e.g., `gameObject`, `playerPuppet`, `NpcPuppet`) from the active multiplayer map state.
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
 * System providing status and progression access for the game's loading screen interfaces.
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
   * @returns A value representing loading progress (typically from 0 to 100, or 0 to 1).
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
   * Converts a plaintext string model or path identifier name directly into a stable 64-bit unsigned hash representation.
   * @param name - Raw item asset or TweakDB blueprint name path string.
   * @param type - Parsing method mode targeting either a TweakDB path reference (`tweakdbid`) or an internal engine CName string hash (`cname`).
   * @returns The calculated hash string value.
   */
  getHashFromName(name: string, type: 'tweakdbid' | 'cname'): string;

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
 * Extension modifications interface for handling core UI layout system menu changes.
 * @category Natives
 */
export interface extended__inkISystemRequestsHandler {
  /**
   * Forces the UI context architecture to navigate back out into the main landing splash screen.
   */
  StartMainMenu(): void;
}

/**
 * Extension properties layout covering basic model transformation and mesh manipulation structures.
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
 * Extension targeting profile gender assignment states within character builder customization instances.
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
 * Extension containing world environmental configuration loops and dynamic weather controllers.
 * @category Natives
 */
interface extended__worldWeatherScriptInterface {
  /**
   * Commands the environment engine manager to override active weather profiles.
   * @param weather - The numerical weather enum state or specific profile asset name path string.
   * @param blendTime - Optional transition timeline sequence parameter in seconds.
   * @param priority - Optional overlay layer sorting stack index weight level identifier.
   * @returns `true` if weather override commands executed, otherwise `false`.
   */
  SetWeather(
    weather: CyberEnums.EWeatherState | string,
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
 * Extension mapping comprehensive physical data structures on vehicle entities.
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
 * Extension covering target waypoint paths tracking adjustments.
 * @category Natives
 */
interface extended__gameMappinSystem {
  /**
   * Pins or tracks a UI map indicator landmark tracking profile target pathing point.
   * @param id - Unique mapping ID parameter identifier structure.
   */
  TrackMappin(id: gameNewMappinID): void;
}

import '../out/game.d.ts';

/**
 * Module ambient typing overlay declarations expanding baseline types inside the internal engine definitions path.
 */
declare module '../out/game.d.ts' {
  interface worldWeatherScriptInterface {
    SetWeather: extended__worldWeatherScriptInterface['SetWeather'];
    ResetWeather: extended__worldWeatherScriptInterface['ResetWeather'];
  }

  interface vehicleBaseObject extends extended__vehicleBaseObject {}

  export interface gameMappinSystem extends extended__gameMappinSystem {}

  /**
   * Filter type mapped strictly to extract fields inheriting properties originating from `gameScriptableSystem`.
   * @template T - The baseline target typing mapping block index to scan.
   */
  type OnlyExtendingScriptableSystem<T> = {
    [K in keyof T as T[K] extends typeof gameScriptableSystem
      ? K
      : never]: T[K];
  };

  interface gameScriptableSystemsContainer<
    Map = OnlyExtendingScriptableSystem<MpClasses>,
  > {
    /**
     * Resolves an isolated structural execution system script framework block instance module by name.
     * @template N - Key matching target extensions inside active scripting layouts.
     * @param systemName - The exact structural name of the requested scriptable system.
     * @returns The active unwrapped instance structure mapping implementation.
     */
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
