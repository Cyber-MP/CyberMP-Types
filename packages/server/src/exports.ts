/**
 * Interface managing cross-resource execution pipelines.
 *
 * This intersection type enables a dual-purpose pattern: it can be invoked directly as a
 * function to register and expose local routines (`MpCreateExport`), or accessed as a nested
 * directory dictionary to invoke public endpoints exposed by external resources (`MpExternalExports`).
 * @example
 * // in resource named "freeroam" -
 * mp.exports('showNotification', (message) => console.log("Notification from freeroam", message))
 * // triggering this function in any other resource -
 * mp.exports.freeroam.showNotification('test message')
 */
export type MpExports = MpExternalExports & MpCreateExport;

/**
 * A dynamic index mapping representing foreign modules and their exposed public functions.
 */
interface MpExternalExports {
  /**
   * Accesses an external module's public namespace by its resource name string.
   */
  [module: string]: {
    /**
     * Invokes a specific exported method from the targeted external resource.
     * @template T - Array type mapping the arguments passed to the external routine.
     * @template R - The expected return value or wrapped Promise type.
     * @param args - Arbitrary parameters forwarded directly to the target function execution context.
     * @returns The synchronous or asynchronous output value of the foreign routine.
     */
    [name: string]: <T extends unknown[] = unknown[], R = unknown>(
      ...args: T
    ) => R | Promise<R>;
  };
}

/**
 * Defines a function signature used to expose a local routine to the global environment.
 *
 * Registers a callback execution mapping under a specific name identifier, making it
 * discoverable and executable by separate script runtime containers.
 *
 * @template T - Array type mapping the callback's expected input parameters.
 * @template R - The expected synchronous or asynchronous return layout pattern.
 * @param name - The unique public string label assigned to this export entry point.
 * @param callback - The underlying functional routine logic triggered upon external invocation.
 */
type MpCreateExport = <T extends unknown[] = unknown[], R = unknown>(
  name: string,
  callback: (...args: T) => R | Promise<R>,
) => void;
