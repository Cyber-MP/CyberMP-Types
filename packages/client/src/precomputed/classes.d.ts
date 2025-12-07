/// <reference path="./enums.d.ts" />

/**
 * Class with custom CyberMP native methods.
 */
declare interface CyberMP {
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

declare interface worldWeatherScriptInterface extends IScriptable {
  public SetWeather(
    weather: CyberEnums.WeatherState,
    blendTime?: number,
    priority?: number,
  ): void;
  public ResetWeather(forceRestore?: boolean, blendTime?: number): void;
  public GetWeatherState(): worldWeatherState;
  public GetEnvironmentDefinition(): worldEnvironmentDefinition;
}

declare interface vehicleBaseObject extends gameObject {
  public HasGravity(): boolean;
  public EnableGravity(is_enable: boolean): boolean;
  public AddLinelyVelocity(
    velocity: Vector3,
    angularVelocity: Vector3,
  ): boolean;
  public ChangeLinelyVelocity(
    velocity: Vector3,
    angularVelocity: Vector3,
    switchIndex: number,
  ): boolean;
  public GetVelocity(): Vector3;
  public GetAngularVelocity(): Vector3;
  public GetPhysicsState(): number;
  public IsOnGround(): boolean;
  public GetBoundaryBox(): Box;
  public VehicleOwnerWasChanged(): void;
}

declare interface gameMappinSystem extends gamemappinsIMappinSystem {
  TrackMappin(id: gameNewMappinID): void;
}

type OnlyExtendingScriptableSystem<T> = {
  [K in keyof T as T[K] extends typeof gameScriptableSystem ? K : never]: T[K];
};

declare interface gameScriptableSystemsContainer<Map = OnlyExtendingScriptableSystem<MpClasses>> {
  "Get"<N extends keyof Map>(systemName: N): UnwrapMpClass<Map[N]>;
}
