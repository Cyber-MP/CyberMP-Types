export class questPhaseNodeDefinition extends questEmbeddedGraphNodeDefinition {
  saveLock?: boolean;
  phaseResource?: ResourceAsyncRef;
  unfreezingTriggerNodeRef?: string;
  phaseInstancePrefabs?: questQuestPrefabEntry[];
  phaseGraph?: questGraphDefinition;
}
