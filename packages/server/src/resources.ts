/**
 * What {@link MpResources.getState} answers for a resource.
 */
export enum ResourceState {
  /** The server knows no resource with this name. */
  NotRunning = 0,
  /**
   * The resource's script is being loaded right now. A resource sees itself
   * in this state while its top-level code and its `resourceStart` handler run.
   */
  Starting = 1,
  /** The resource is loaded and running. */
  Running = 2,
  /**
   * The resource exists but is not running: it was stopped, or it was never
   * started (for example it is not listed in `resources` in server.toml).
   */
  Stopped = 3,
}

export interface MpResources {
  /**
   * Reads the `resource.toml` of a resource.
   *
   * The file comes back converted to JSON, not as TOML text, so you can pass
   * the result straight to `JSON.parse()`.
   *
   * @param name - Name of the resource.
   * @returns The content of `resource.toml` as a JSON string, or `null` if no resource has this name.
   */
  getTOML(name: string): string | null;

  /**
   * Gets the current state of a resource.
   * @param resourceName The resource to check.
   * @returns Resource state (see {@link ResourceState}).
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
   * @param resourceName Name of the resource to restart.
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
   * Reads a file inside a resource and returns its contents.
   * @param resourceName Name of the resource.
   * @param pathToResource Path to the file, relative to the resource folder.
   * @returns File content as string, or `null` if the file does not exist.
   */
  loadFile(resourceName: string, pathToResource: string): string | null;
}
