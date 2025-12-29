/// <reference path="./enums.d.ts" />
/// <reference path="../enums.d.ts" />
/// <reference path="./primitives.d.ts" />
/// <reference path="./classes.d.ts" />
/// <reference path="../classes.d.ts" />

interface OverrideFunction {
  <
    C extends keyof MpClasses,
    I extends UnwrapMpClass<MpClasses[C]>,
    M extends keyof I extends never ? string : keyof I,
  >(
    className: C,
    methodName: M,
    callback: (self: I, ...args: [...Parameters<I[M]>, origin: I[M]]) => void,
  ): void;
}

interface ObserveFunction {
  <
    C extends keyof MpClasses,
    I extends UnwrapMpClass<MpClasses[C]>,
    M extends keyof I extends never ? string : keyof I,
  >(
    className: C,
    methodName: M,
    callback: (self: I, ...args: Parameters<I[M]>) => void,
  ): void;
}

interface TweakDB {
  getRecords<T = any>(str: string): T[];
  getRecord<T = any>(str: string): T;
  query(str: string): string[];
  getFlat<T = any>(str: string): T;
  setFlats(str: string, arr: any[]): boolean;
  setFlat(str: string, obj: any): boolean;
  setFlatNoUpdate(str: string, obj: any): boolean;
  updateRecord(str: string): boolean;
  createRecord(key: string, value: string): boolean;
}

interface MpGamePrecomputed {
  CyberMP: CyberMP;
  TweakDB: TweakDB;

  /**
   * Method to retrieve input events.
   */
  onInputKeyEvent(
    callback: (
      action: CyberEnums.EInputAction,
      key: CyberEnums.EInputKey,
    ) => void,
  ): void;

  /**
   * Event when the game is started.
   */
  onGameLoaded(callback: () => void): void;

  /**
   * Event when tweaks is loaded.
   */
  onTweak(callback: () => void): void;

  /**
   * Event when tweaks is loaded.
   */
  onInit(callback: () => void): void;

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
   * Returns model hash convertable to number.
   * @param name Model name
   * @param type Model name type
   * @returns Model hash
   */
  getHashFromName(name: string, type: "tweakdbid" | "cname"): string;

  /**
   * Overrides method function inside selected class.
   * @param className Class name
   * @param methodName Method name inside of class
   * @param {selfFunction} func Function to override instead
   */
  override: OverrideFunction;

  /**
   * Observes method inside selected class.
   * @param className Class name
   * @param methodName Method name inside of class
   * @param {selfFunction} callback Callback of method function.
   */
  observeAfter: ObserveFunction;

  /**
   * Observes method inside selected class.
   * @param className Class name
   * @param methodName Method name inside of class
   * @param {selfFunction} callback Callback of method function.
   */
  observeBefore: ObserveFunction;

  /**
   * Alias for {@link observeBefore}.
   * @param className Class name
   * @param methodName Method name inside of class
   * @param {selfFunction} callback Callback of method function.
   */
  observe: ObserveFunction;

  /**
   * Observes method inside selected class. Can only call methods from {@link MpGame}.
   * Should be used when it's important for the function to execute quickly (as fast as V8 allows).
   * @param className Class name
   * @param methodName Method name inside of class
   * @param {selfFunction} callback Callback of method function.
   */
  observeAfterRaw: ObserveFunction;

  /**
   * Observes method inside selected class. Can only call methods from {@link MpGame}.
   * Should be used when it's important for the function to execute quickly (as fast as V8 allows).
   * @param className Class name
   * @param methodName Method name inside of class
   * @param {selfFunction} callback Callback of method function.
   */
  observeBeforeRaw: ObserveFunction;

  /**
   * Alias for {@link observeBeforeRaw}.
   * @param className Class name
   * @param methodName Method name inside of class
   * @param {selfFunction} callback Callback of method function.
   */
  observeRaw: ObserveFunction;

  toVariant<R = {}>(obj: any, str: string): R;
  fromVariant<R = any>(obj: any): R;

  isBlackScreenStarted(): boolean;

  isBlackScreenEnded(): boolean;
}
