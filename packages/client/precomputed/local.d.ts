/**
 * Manages local player lifecycle operations and the creation of client-side entities.
 */
export interface MpLocal {
  /**
   * Spawns local player
   * @param x - Horizontal grid position coordinate value.
   * @param y - Vertical grid position coordinate value.
   * @param z - Height grid elevation coordinate value.
   * @param yaw - The horizontal rotation layout angle in degrees.
   * @returns `true` if the spawn lifecycle sequence initiated successfully, otherwise `false`.
   */
  spawnPlayer(x: number, y: number, z: number, yaw: number): boolean;

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
  spawnPed(
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
  spawnVehicle(
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
  spawnObject(
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
  despawnPed(hash: number): void;

  /**
   * Forces immediate engine de-allocation and cleanup deletion maps targeting an isolated local vehicle.
   * @param hash - Unique local game engine entity instance handle to clear.
   */
  despawnVehicle(hash: number): void;

  /**
   * Forces immediate engine de-allocation and cleanup deletion maps targeting an isolated local object.
   * @param hash - Unique local game engine entity instance handle to clear.
   */
  despawnObject(hash: number): void;
}
