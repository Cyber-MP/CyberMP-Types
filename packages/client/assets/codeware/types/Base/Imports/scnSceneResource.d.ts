export class scnSceneResource extends CResource {
  entryPoints?: scnEntryPoint[];
  exitPoints?: scnExitPoint[];
  notablePoints?: scnNotablePoint[];
  executionTagEntries?: scnExecutionTagEntry[];
  actors?: scnActorDef[];
  playerActors?: scnPlayerActorDef[];
  sceneGraph?: scnSceneGraph;
  localMarkers?: scnLocalMarker[];
  props?: scnPropDef[];
  ridResources?: scnRidResourceHandler[];
  workspots?: scnWorkspotData[];
  workspotInstances?: scnWorkspotInstance[];
  resouresReferences?: scnSRRefCollection;
  screenplayStore?: scnscreenplayStore;
  locStore?: scnlocLocStoreEmbedded;
  version?: number;
  voInfo?: scnSceneVOInfo[];
  effectDefinitions?: scnEffectDef[];
  effectInstances?: scnEffectInstance[];
  executionTags?: scnExecutionTag[];
  referencePoints?: scnReferencePointDef[];
  interruptionScenarios?: scnInterruptionScenario[];
  sceneSolutionHash?: scnSceneSolutionHash;
  sceneCategoryTag?: scnSceneCategoryTag;
  debugSymbols?: scnDebugSymbols;
}
