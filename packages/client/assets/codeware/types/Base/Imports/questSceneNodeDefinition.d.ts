export class questSceneNodeDefinition extends questSignalStoppingNodeDefinition {
  sceneFile?: ResourceAsyncRef;
  sceneLocation?: scnWorldMarker;
  interruptionOperations?: scnIInterruptionOperation[];
  syncToMusic?: boolean;
  notAllowedToBeFrozen?: boolean;
  reapplyInterruptionOperationsAfterGameLoad?: boolean;
}
