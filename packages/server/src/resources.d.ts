
/**
 * @category Resources
 */
export interface MpResources {
  /**
   * Gets the current state of a resource.
   * @param resourceName The resource to check.
   * @returns Resource state as string.
   */
  getState(resourceName: string): string;

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

  restart(resourceName: string): void;

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
