/**
 * Interface providing access to persistent client-side key-value storage.
 * Data saved here remains available across different game sessions and server reconnections.
 */
export interface MpLocalStorage {
  /**
   * Associates a string value with a specific key in the storage database.
   * If the key already exists, its value will be overwritten.
   * @param key - The unique identifier name for the storage entry.
   * @param value - The plaintext string data payload to be stored.
   */
  set(key: string, value: string): void;

  /**
   * Retrieves the stored string value associated with the specified key.
   * @param key - The unique identifier name of the entry to fetch.
   * @returns The stored string value, or an empty string/null if the key does not exist.
   */
  get(key: string): string;

  /**
   * Permanently removes a specific key-value entry from the storage map.
   * @param key - The unique identifier name of the entry to delete.
   */
  delete(key: string): void;

  /**
   * Clears all keys and values currently held in this resource's local storage instance.
   */
  deleteAll(): void;

  /**
   * Explicitly flushes the current state of the in-memory storage data down to the physical disk.
   * Use this to ensure volatile data isn't lost if the game client unexpectedly crashes.
   */
  save(): void;
}
