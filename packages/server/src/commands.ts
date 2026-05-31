import type { MpPlayer } from './players';

export interface MpCommands {
  /**
   * Register a command in the server scope.
   * @param commandName Command name without "/".
   * @param callback Callback with player and args.
   */
  add(
    commandName: string,
    callback: (player: MpPlayer, args: string[]) => void,
  ): void;
}
