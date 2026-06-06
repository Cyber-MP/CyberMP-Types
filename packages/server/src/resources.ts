export enum ResourceState {
  NotRunning = 0,
  Starting = 1,
  Running = 2,
  Stopped = 3,
}

export interface MpResources {
  /**
   * Retrieves the raw string contents of a specified TOML configuration file.
   * @param name - The name or identifier key of the target TOML resource.
   * @returns The raw TOML formatted configuration string.
   */
  getTOML(name: string): string;

  /**
   * Gets the current state of a resource.
   * @param resourceName The resource to check.
   * @returns Resource state as string.
   */
  getState(resourceName: string): ResourceState;

  /**
   * Starts a specific resource by name.
   * @param resourceName Name of the resource to start.
   */
  start(resourceName: string): void;

  /**
   * Stops a specific resource by name.
   * @param resourceName Name of the resource to stop.
   */
  stop(resourceName: string): void;

  /**
   * Restarts a specific resource by name.
   * @param resourceName Name of the resource to stop.
   */
  restart(resourceName: string): void;

  /**
   * Re-indexes all resources
   */
  refresh(): void;

  /**
   * Gets the current resource's name.
   * @returns Resource name.
   */
  getCurrentName(): string;

  /**
   * Gets metadata from a resource manifest.
   * @param resourceName Resource name.
   * @param keyName Metadata key.
   * @param index Index (if multiple values exist).
   * @returns Metadata string.
   */
  getMetadata(resourceName: string, keyName: string, index: number): string;

  /**
   * Reads a file inside a resource and returns its contents.
   * @param resourceName Name of the resource.
   * @param pathToResource Path to the file.
   * @returns File content as string.
   */
  loadFile(resourceName: string, pathToResource: string): string;
}
