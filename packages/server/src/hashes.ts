/**
 * Converts a path/name to any game hash type.
 */
export interface MpHashes {
  /**
   * Hashes a TweakDB record path, for example `Vehicle.v_sport2_quadra_type66`.
   * @returns The TweakDBID as a `number` (it is small enough to fit in one).
   */
  tweakdbid(path: string): number;

  /**
   * Hashes a name, for example a vehicle or ped appearance name.
   * @returns The CName as a `bigint`: it is a 64-bit hash, too large for a `number`.
   */
  cname(path: string): bigint;

  /**
   * Hashes a resource path, for example the path of an `.ent` file.
   * @returns The ResRef as a `bigint`: it is a 64-bit hash, too large for a `number`.
   */
  resref(path: string): bigint;
}
