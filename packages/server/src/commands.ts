import type { MpPlayer } from './players';

export interface MpCommands {
  /**
   * Register a command
   *
   * A command can also be typed in the server console. In that case `player`
   * is not `null`: it is a player wrapper whose `id` is `0`. Nobody is behind
   * that wrapper, and reading most of its properties (`nickname`, `ip`,
   * `exist`, `dimension`...) throws, so check for it first.
   *
   * @param commandName Command name without "/".
   * @param callback Callback with the player who ran the command and its arguments (always strings).
   *
   * @example
   * mp.commands.add('whoami', (player) => {
   *   const isFromServerConsole = !player || player.id === 0;
   *   if (isFromServerConsole) {
   *     console.log('You are the server console.');
   *     return;
   *   }
   *   console.log(`You are ${player.nickname}.`);
   * });
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
