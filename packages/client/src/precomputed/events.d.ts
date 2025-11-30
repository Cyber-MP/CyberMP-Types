declare interface MpEvents {
  /**
   * Register a custom event listener.
   * @param eventName Name of the event.
   * @param callback Callback function.
   */
  on(eventName: string, callback: (...args: any[]) => void): void;

  /**
   * UnRegister a custom event listener.
   * @param eventName Name of the event.
   * @param callback Callback function.
   */
  off(eventName: string, callback: (...args: any[]) => void): void;

  /**
   * Emit a previously registered custom event.
   *
   * @param eventName Name of the event.
   * @param args Arguments to pass.
   */
  emit(eventName: string, ...args: any[]): void;

  /**
   * Register a listener for server event on client.
   */
  onServer(eventName: string, callback: (...args: any[]) => void): void;

  /**
   * Emit an event to the server.
   */
  emitServer(eventName: string, ...args: any[]): void;

  /**
   * Emit an event to the cef.
   */
  emitCef(eventName: string, ...args: any[]): void;

  /**
   * Register a custom cef event listener.
   * @param eventName Name of the event.
   * @param callback Callback function.
   */
  onCef(eventName: string, callback: (...args: any[]) => void): void;

  /**
   * Register a command in the client scope.
   * @param commandName Command name without "/".
   * @param callback Callback with id and args.
   */
  addCommand(
    commandName: string,
    callback: (id: number, args: string[]) => void,
  ): void;
}
