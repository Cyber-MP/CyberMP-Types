import type { MpPlayer } from './players';

export interface MpCommands {
  /**
   * Register a command
   * @param commandName Command name without "/".
   * @param callback Callback with player and args.
   */
  add(
    commandName: string,
    callback: (player: MpPlayer | null, args: string[]) => void,
  ): void;

  /**
   * Unregister a command
   * @param commandName Command name without "/".
   */
  remove(commandName: string): void;
}
