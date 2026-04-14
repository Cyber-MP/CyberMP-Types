/**
 * 0 - x
 * 1 - y
 * 2 - z
 * @category Global
 */
export type Vector3 = [x: number, y: number, z: number];

/**
 * 0 - x
 * 1 - y
 * 2 - z
 * 3 - w
 * @category Global
 */
export type Vector4 = [x: number, y: number, z: number, w: number];

/**
 * 0 - pitch
 * 1 - roll
 * 2 - yaw
 * @category Global
 */
export type Rotation = [pitch: number, roll: number, yaw: number];

/**
 * @category Hashes
 */
export type GameHash = bigint | number;
/**
 * @category Hashes
 */
export type TweakDBID = GameHash;
/**
 * @category Hashes
 */
export type CName = GameHash;
/**
 * @category Hashes
 */
export type ResRef = GameHash;

/**
 * @ignore
 */
export type Class<T, Arguments extends unknown[] = any[]> = {
  prototype: Pick<T, keyof T>;
  new (...arguments_: Arguments): T;
};
