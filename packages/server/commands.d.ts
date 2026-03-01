/// <reference path="./players.d.ts" />

interface MpCommands {
  /**
   * Register a command in the server scope.
   * @param commandName Command name without "/".
   * @param callback Callback with id and args.
   */
  add(
    commandName: string,
    callback: (player: MpPlayer, args: string[]) => void,
  ): void;
}
