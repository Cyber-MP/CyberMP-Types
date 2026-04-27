export interface MpLocalStorage {
  set(key: string, value: string): void;
  get(key: string): string;

  delete(key: string): void;
  deleteAll(): void;

  save(): void;
}
