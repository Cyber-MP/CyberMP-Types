/**
 * Manages the registration, handling, and unregistration of runtime client console commands.
 */
export interface MpCommands {
  /**
   * Register a command
   * @param commandName Command name without "/".
   * @param callback Callback with player and args.
   */
  add(
    commandName: string,
    callback: (id: number, args: string[]) => void,
  ): void;

  /**
   * Unregister a command
   * @param commandName Command name without "/".
   */
  remove(commandName: string): void;
}
