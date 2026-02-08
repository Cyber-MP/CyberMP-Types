import * as CyberEnums from "../enums";

declare global {
  /**
   * Class with custom CyberMP native methods.
   */
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
  }

  interface worldWeatherScriptInterface extends IScriptable {
    SetWeather(
      weather: CyberEnums.WeatherState,
      blendTime?: number,
      priority?: number,
    ): void;
    ResetWeather(forceRestore?: boolean, blendTime?: number): void;
    GetWeatherState(): worldWeatherState;
    GetEnvironmentDefinition(): worldEnvironmentDefinition;
  }

  interface vehicleBaseObject extends gameObject {
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

  interface gameMappinSystem extends gamemappinsIMappinSystem {
    TrackMappin(id: gameNewMappinID): void;
  }

  type OnlyExtendingScriptableSystem<T> = {
    [K in keyof T as T[K] extends typeof gameScriptableSystem
      ? K
      : never]: T[K];
  };

  interface gameScriptableSystemsContainer<
    Map = OnlyExtendingScriptableSystem<MpClasses>,
  > {
    "Get"<N extends keyof Map>(systemName: N): UnwrapMpClass<Map[N]>;
  }

  class ScriptGameInstance {
    static GetLoadingScreenSystem(): LoadingScreenSystem;
  }

  interface LoadingScreenSystem {
    GetLoadingScreenState(): CyberEnums.ELoadingScreenState;
    GetLoadingScreenProgress(): number;
    OnLoadingScreenStateChange(newState: CyberEnums.ELoadingScreenState): void;
  }

  interface inkISystemRequestsHandler {
    StartMainMenu(): void;
  }

  interface gameuiICharacterCustomizationSystem {
    SetPlayerGender(gender: CyberEnums.EPlayerGender, savedPos?: boolean): void;
    OnPlayerGenderChanged(gender: CyberEnums.EPlayerGender): void;
  }
}

export { };

