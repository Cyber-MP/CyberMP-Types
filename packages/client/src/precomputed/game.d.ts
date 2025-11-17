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
   * Event when tweaks is loaded.
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
   * Returns model hash convertable to number.
   * @param name Model name
   * @param type Model name type
   * @returns Model hash
   */
  getHashFromName(name: string, type: "tweakdbid" | "cname"): string;
}
