interface MpResources {
  /**
   * Gets the current state of a resource.
   * @param resourceName The resource to check.
   * @returns Resource state as string.
   */
  getResourceState(resourceName: string): string;

  /**
   * Starts a specific resource by name.
   * @param resourceName Name of the resource to start.
   */
  startResource(resourceName: string): void;

  /**
   * Stops a specific resource by name.
   * @param resourceName Name of the resource to stop.
   */
  stopResource(resourceName: string): void;

  /**
   * Gets the current resource's name.
   * @returns Resource name.
   */
  getCurrentResourceName(): string;

  /**
   * Gets the number of metadata values for a key.
   * @param resourceName Resource name.
   * @param keyString Metadata key name.
   * @returns Number of metadata entries.
   */
  getNumResourceMetadata(resourceName: string, keyString: string): number;

  /**
   * Gets metadata from a resource manifest.
   * @param resourceName Resource name.
   * @param keyName Metadata key.
   * @param index Index (if multiple values exist).
   * @returns Metadata string.
   */
  getResourceMetadata(
    resourceName: string,
    keyName: string,
    index: number,
  ): string;

  /**
   * Reads a file inside a resource and returns its contents.
   * @param resourceName Name of the resource.
   * @param pathToResource Path to the file.
   * @returns File content as string.
   */
  loadResourceFile(resourceName: string, pathToResource: string): string;
}
