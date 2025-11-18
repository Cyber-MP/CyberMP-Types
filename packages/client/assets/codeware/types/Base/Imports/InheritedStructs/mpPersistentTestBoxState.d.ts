export interface mpPersistentTestBoxState {
  recordID?: TweakDBID;
  persistentID?: bigint;
  isOn?: boolean;
  weakPersistentEntity?: wref;
  weakPersistentEntityComponent?: wref;
  weakDynamicEntity?: wref;
  weakDynamicEntityComponent?: wref;
}
