interface MpCommands {
  /**
   * Executes a registered server command.
   * @param commandName Command string.
   */
  executeCommand(commandName: string, args: any[]): void;

  /**
   * Register a command in the server scope.
   * @param commandName Command name without "/".
   * @param callback Callback with id and args.
   */
  addCommand(
    commandName: string,
    callback: (id: number, args: string[]) => void,
  ): void;
}
