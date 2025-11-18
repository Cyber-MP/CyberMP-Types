/// <reference path="./enums.d.ts" />
/// <reference path="../enums.d.ts" />
/// <reference path="./primitives.d.ts" />
/// <reference path="./classes.d.ts" />
/// <reference path="../classes.d.ts" />

declare interface MpGamePrecomputed {
  /**
   * Method to retrieve input events.
   */
  onInputKeyEvent(
    callback: (
      action: CyberEnums.EInputAction,
      key: CyberEnums.EInputKey
    ) => void
  ): void;

  /**
   * Event when the game is started.
   */
  onGameLoaded(callback: () => void): void;

  /**
   * Event when tweaks are loaded.
   */
  onTweak(callback: () => void): void;

  /**
   * Event when local player has been spawned.
   */
  onLocalPlayerSpawned(callback: () => void): void;

  /**
   * Get singleton.
   */
  getSingleton<T extends keyof MpClasses>(name: T): UnwrapMpClass<MpClasses[T]>;

  /**
   * Add something to inventory.
   */
  AddToInventory(itemName: string, count: number): void;

  /**
   * Returns model hash convertible to number.
   * @param name Model name
   * @param type Model name type
   * @returns Model hash
   */
  getHashFromName(name: string, type: "tweakdbid" | "cname"): string;

  /**
   * @callback selfFunction
   * @param self Link to used class
   * @param args Method arguments
   */

  /**
   * Overrides method function inside selected class.
   * @param className Class name
   * @param methodName Method name inside of class
   * @param {selfFunction} func Function to override instead
   */
  override(
    className: string,
    methodName: string,
    func: (self: any, ...args: any[]) => void
  ): void;

  /**
   * Observes method inside selected class.
   * @param className Class name
   * @param methodName Method name inside of class
   * @param {selfFunction} callback Callback of method function.
   */
  observeAfter(
    className: string,
    methodName: string,
    callback: (self: any, ...args: any[]) => void
  ): void;

  /**
   * Observes method inside selected class.
   * @param className Class name
   * @param methodName Method name inside of class
   * @param {selfFunction} callback Callback of method function.
   */
  observeBefore(
    className: string,
    methodName: string,
    callback: (self: any, ...args: any[]) => void
  ): void;

  /**
   * Alias for {@link observeBefore}.
   * @param className Class name
   * @param methodName Method name inside of class
   * @param {selfFunction} callback Callback of method function.
   */
  observe(
    className: string,
    methodName: string,
    callback: (self: any, ...args: any[]) => void
  ): void;

  /**
   * Observes method inside selected class. Can only call methods from {@link MpGame}.
   * Should be used when it's important for the function to execute quickly (as fast as V8 allows).
   * @param className Class name
   * @param methodName Method name inside of class
   * @param {selfFunction} callback Callback of method function.
   */
  observeAfterRaw(
    className: string,
    methodName: string,
    callback: (self: any, ...args: any[]) => void
  ): void;

  /**
   * Observes method inside selected class. Can only call methods from {@link MpGame}.
   * Should be used when it's important for the function to execute quickly (as fast as V8 allows).
   * @param className Class name
   * @param methodName Method name inside of class
   * @param {selfFunction} callback Callback of method function.
   */
  observeBeforeRaw(
    className: string,
    methodName: string,
    callback: (self: any, ...args: any[]) => void
  ): void;

  /**
   * Alias for {@link observeBeforeRaw}.
   * @param className Class name
   * @param methodName Method name inside of class
   * @param {selfFunction} callback Callback of method function.
   */
  observeRaw(
    className: string,
    methodName: string,
    callback: (self: any, ...args: any[]) => void
  ): void;

  isBlackScreenStarted(): boolean;

  isBlackScreenEnded(): boolean;
}
