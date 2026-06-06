import type * as CyberEnums from '../out/enums';

/**
 * Interface for managing, loading, and tracking resources.
 *
 * Provides utilities for reading configuration files (TOML), loading raw file contents,
 * querying the lifecycle status of specific assets, and identifying the active resource container.
 */
export interface MpResources {
  /**
   * Retrieves the raw string contents of a specified TOML configuration file.
   * @param name - The name or identifier key of the target TOML resource.
   * @returns The raw TOML formatted configuration string.
   */
  getTOML(name: string): string;

  /**
   * Loads the raw string data of a file from the specified file system path.
   * @param path - The path to the file relative to the resource directory.
   * @returns The complete string content of the target file.
   */
  loadFile(path: string): string;

  /**
   * Queries the current loading or runtime execution state of a specific resource.
   * @param name - The name of the target resource to check.
   * @returns The current operational state enumeration value.
   */
  getState(name: string): CyberEnums.EResourceState;

  /**
   * Gets the name identifier of the current resource or script execution context.
   * @returns The name string of the active resource bundle.
   */
  getCurrentName(): string;
}
